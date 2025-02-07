"use client";

import {
  PERSONA_TYPES_DROPDOWN,
  LOAN_PURPOSE_TYPES_DROPDOWN,
  PERSONA_WIDGET_PROPS,
} from "@/constants/persona";
import DropdownWithLabel from "./DropdownWithLabel";
import InputWithLabel from "./InputWithLabel";
import WidgetContainer from "./WidgetContainer";
import { useState } from "react";
import ApplicationSteps from "./ApplicationSteps";
import ActionButton from "./ActionButton";
import { WidgetPersonaDataProps } from "@/@types/persona";

export default function OfferPageWrapper({ token }: { token: string }) {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);
  const [persona, setPersona] = useState<string>("");
  const [loanPurpose, setLoanPurpose] = useState<string>("");
  const [amount, setAmount] = useState<string | number>("");
  const [widgetDataProps, setWidgetDataProps] =
    useState<WidgetPersonaDataProps>();

  const validateInputs = () => {
    if (persona && loanPurpose && amount) {
      const data = PERSONA_WIDGET_PROPS.find((a) => a.key === persona);
      setWidgetDataProps(data?.value);
      return true;
    }

    return false;
  };
  return (
    <div className="h-screen m-auto text-center p-10 flex flex-col align-items-center">
      <div className="flex flex-wrap items-end">
        <DropdownWithLabel
          label={"Select Persona"}
          options={PERSONA_TYPES_DROPDOWN}
          onSelect={(val) => setPersona(val)}
        />
        <DropdownWithLabel
          label={"Loan Purpose"}
          options={LOAN_PURPOSE_TYPES_DROPDOWN}
          onSelect={(val) => setLoanPurpose(val)}
        />
        <InputWithLabel
          label="Request Amount"
          onChange={(val) => setAmount(val)}
          type="number"
        />
        <ActionButton
          onClick={() => {
            if (validateInputs()) {
              console.log(persona);
              console.log(loanPurpose);
              console.log(amount);
              setShouldLoadWidget(true);
            }
          }}
        />
      </div>
      <div
        className={`h-min-[500px] border border-gray-300 relative w-full mt-10`}
      >
        {shouldLoadWidget && (
          <WidgetContainer
            onWidgetLoad={() => setIsWidgetLoaded(true)}
            token={token}
            persona={persona}
            loanPurpose={loanPurpose}
            amount={amount}
            widgetDataProps={widgetDataProps}
          />
        )}
      </div>
      {isWidgetLoaded && <ApplicationSteps />}
    </div>
  );
}
