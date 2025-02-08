"use client";

import {
  PERSONA_TYPES_DROPDOWN,
  LOAN_PURPOSE_TYPES_DROPDOWN,
} from "@/constants/persona";
import DropdownWithLabel from "./DropdownWithLabel";
import InputWithLabel from "./InputWithLabel";
import WidgetContainer from "./WidgetContainer";
import { useState } from "react";
import ApplicationSteps from "./ApplicationSteps";
import ActionButton from "./ActionButton";
import { LoanPurpose, WidgetPersonaDataProps } from "@/@types/persona";
import { getPIIPropsBasedOnOfferType } from "@/utils/offerUtils";

export default function OfferPageWrapper({ token }: { token: string }) {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const [offerType, setOfferType] = useState<string>("");
  const [loanPurpose, setLoanPurpose] = useState<LoanPurpose>();
  const [amount, setAmount] = useState<number>(0);
  const [widgetDataProps, setWidgetDataProps] =
    useState<WidgetPersonaDataProps>();

  const validateInputs = () => {
    if (offerType && loanPurpose && amount) {
      // this triggers a rerender and the widget is reloaded
      const piiData = getPIIPropsBasedOnOfferType(
        offerType,
        amount,
        loanPurpose
      );
      setWidgetDataProps(piiData);
      return true;
    }
    return false;
  };
  return (
    <div className="h-screen m-auto text-center p-10 flex flex-col align-items-center">
      <div className="flex flex-wrap items-end">
        <DropdownWithLabel
          label="Select Offer Type"
          options={PERSONA_TYPES_DROPDOWN}
          onSelect={(val) => {
            setOfferType(val);
          }}
        />
        <DropdownWithLabel
          label="Loan Purpose"
          options={LOAN_PURPOSE_TYPES_DROPDOWN}
          onSelect={(val: LoanPurpose) => setLoanPurpose(val)}
        />
        <InputWithLabel
          label="Request Amount"
          onChange={(val) => setAmount(val)}
        />
        <ActionButton
          onClick={() => {
            if (validateInputs()) {
              setShouldLoadWidget(true);
            }
          }}
        />
      </div>
      <div className={`relative w-full mt-10`}>
        {shouldLoadWidget && (
          <WidgetContainer
            onWidgetLoad={() => setIsWidgetLoaded(true)}
            token={token}
            widgetDataProps={widgetDataProps}
            offerType={offerType}
          />
        )}
      </div>
      {isWidgetLoaded && <ApplicationSteps />}
    </div>
  );
}
