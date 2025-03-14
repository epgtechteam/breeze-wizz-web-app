"use client";

import {
    LOAN_PURPOSE_TYPES_DROPDOWN,
    PERSONA_TYPES_DROPDOWN,
} from "@/constants/persona";
import DropdownWithLabel from "./DropdownWithLabel";
import { useState } from "react";
// import ApplicationSteps from "./ApplicationSteps";
import { LoanPurpose } from "@epgtechteam/faas-widget-library";
import { getPIIPropsBasedOnOfferType } from "@/utils/offerUtils";
import EstimateDetails from "./EstimateDetails";
import OfferIframePlaceholder from "./OfferIframePlaceholder";
import ActionButton from "./ActionButton";
import InputWithLabel from "./InputWithLabel";
import { Option } from "@/@types/dropdown";
import styles from "./OfferPageWrapper.module.css";
import {
    FinancingPIIData,
    FinancingType,
    IntuitFinancing,
} from "@epgtechteam/faas-widget-library";

export default function OfferPageWrapper({ token }: { token: string }) {
    const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
    const [offerType, setOfferType] = useState<Option>();
    const [loanPurpose, setLoanPurpose] = useState<Option>();
    const [amount, setAmount] = useState<number>(0);
    const [estimateAmount, setEstimateAmount] = useState<number>(0);
    const [widgetDataProps, setWidgetDataProps] = useState<FinancingPIIData>();

    const validateInputs = () => {
        if (offerType && loanPurpose && amount) {
            // this triggers a rerender and the widget is reloaded
            const piiData = {
                ...getPIIPropsBasedOnOfferType(
                    offerType.value,
                    amount,
                    loanPurpose.key as LoanPurpose
                ).data,
            };
            setEstimateAmount(amount);
            setWidgetDataProps(piiData);
            return true;
        }
        return false;
    };
    return (
        <div
            className={`${styles.pageWrapper} m-auto text-center flex flex-col align-items-center`}
        >
            <div className="flex flex-wrap items-end lg:pl-10 pl-5">
                <DropdownWithLabel
                    label="Select Offer Type"
                    options={PERSONA_TYPES_DROPDOWN}
                    onSelect={(val) => {
                        setOfferType(val);
                    }}
                    selectedValue={offerType}
                    className="mr-10 mt-5"
                />
                {shouldLoadWidget && (
                    <>
                        <DropdownWithLabel
                            label="Loan Purpose"
                            options={LOAN_PURPOSE_TYPES_DROPDOWN}
                            onSelect={(val: Option) => setLoanPurpose(val)}
                            selectedValue={loanPurpose}
                            className="mr-10 mt-5"
                        />
                        <InputWithLabel
                            label="Request Amount"
                            value={`${amount}`}
                            onChange={(val) => setAmount(val)}
                            className="mr-10 mt-5"
                        />
                        <ActionButton
                            onClick={() => {
                                if (validateInputs()) {
                                    setShouldLoadWidget(true);
                                }
                            }}
                        />
                    </>
                )}
            </div>
            <div>
                <EstimateDetails estimateAmount={estimateAmount} />
            </div>
            <div className={`relative w-full mt-10 mb-10 lg:px-10 px-5`}>
                {shouldLoadWidget && widgetDataProps ? (
                    <IntuitFinancing
                        bearerToken={token}
                        data={widgetDataProps}
                        offerType={offerType?.value as FinancingType}
                        onError={(error) => console.error(error)}
                        onEvent={(event) => console.log(event)}
                        onSuccess={(success) => console.log(success)}
                    />
                ) : (
                    <OfferIframePlaceholder
                        setAmount={setAmount}
                        setLoanPurpose={setLoanPurpose}
                        onContinueClick={() => {
                            if (validateInputs()) {
                                setShouldLoadWidget(true);
                            }
                        }}
                    />
                )}
            </div>
        </div>
    );
}
