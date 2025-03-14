import { LoanPurpose } from "@/@types/persona";
import { PERSONA_TYPES, PERSONA_WIDGET_DATA_PROPS } from "@/constants/persona";

export const getPIIPropsBasedOnOfferType = (
  offerType: string,
  loanAmount: number,
  loanPurpose: LoanPurpose
) => {
  const props = { ...PERSONA_WIDGET_DATA_PROPS };
  switch (offerType) {
    case PERSONA_TYPES.B2C_CK_PERSONAL_LOAN:
      props.data.consumerInfo.email = "lbetest+control+1730228517655@creditkarma.com";
      break;
    case PERSONA_TYPES.B2C_CK_CREDIT_CARD:
      props.data.consumerInfo.email = "janedoe@abc.com";
      break;
    case PERSONA_TYPES.B2B_QBO_LINE_OF_CREDIT:
      props.data.consumerInfo.email = "johndoe@somebusiness.com";
      break;
    case PERSONA_TYPES.B2B_QBO_TERM_LOAN:
      props.data.consumerInfo.email = "macydoe@somebusiness.com";
      break;
    case PERSONA_TYPES.B2B_NONQBO_CREDIT_CARD:
      props.data.consumerInfo.email = "johnnydoe@somebusiness.com";
      break;
    case PERSONA_TYPES.B2B_NONQBO_BUSINESS_LOAN:
      props.data.consumerInfo.email = "jane_doe@funbusiness.com";
      break;
    default:
      break;
  }
  props.data.financingApplicationInfo.loanAmount = loanAmount;
  props.data.financingApplicationInfo.loanPurpose = loanPurpose;
  return props;
};

export const formatUSD = (amount: number = 0, decimals: number = 0): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};
