/* eslint-disable @typescript-eslint/no-explicit-any */
export type LoanPurpose =
  | "REFINANCE_CREDIT_CARD"
  | "CONSOLIDATE_DEBT"
  | "HOME_IMPROVEMENT"
  | "MAJOR_PURCHASE"
  | "COVER_UNEXPECTED_COST"
  | "OTHER";

export type Persona =
  | "B2C_CK_PERSONAL_LOAN"
  | "B2C_CK_CREDIT_CARD"
  | "B2B_QBO_LINE_OF_CREDIT"
  | "B2B_QBO_TERM_LOAN"
  | "B2B_NONQBO_CREDIT_CARD"
  | "B2B_NONQBO_BUSINESS_LOAN";

export type SuccessType = "SUCCESS" | "SUCCESS_WITH_WARNING";
export type ErrorType =
  | "ERROR"
  | "ERROR_WITH_WARNING"
  | "API_ERROR"
  | "VALIDATION_ERROR";
export type CommunicationEventType =
  | "INFO"
  | "WARNING"
  | "ANALYTICAL"
  | SuccessType
  | ErrorType;

export type WidgetPersonaDataProps = {
  data?: {
    partnerInfo: {
      id: string; // ID to identify the partner (ISV)
      name: string;
    };
    financingApplicationInfo: {
      loanAmount: number; // Amount for which the offers will be fetched
      loanPurpose: LoanPurpose;
    };
    consumerInfo: {
      // // Recipient Info for which Offers will be fetched
      id?: string;
      firstName: string;
      lastName: string;
      email: string; // Recipient Email to which Offers will be fetched
      phone?: string; // Recipient Phone to which Offers will be fetched
      address?: {
        addressLine1?: string;
        addressLine2?: string;
        street?: string;
        city?: string;
        state: string;
        postalCode: string;
        country: string;
      };
    };
    businessInfo: {
      // Business info providing the service
      id?: string;
      logoUrl?: string;
      businessName: string;
      phone?: string;
      industry: string;
      type: string;
      address?: {
        addressLine1?: string;
        addressLine2?: string;
        city?: string;
        state: string;
        postalCode: string;
        country: string;
      };
      ownerInfo: {
        // Merchant Personal Information
        id?: string;
        firstName: string;
        lastName: string;
        email: string;
        phone?: string;
        address?: {
          addressLine1?: string;
          addressLine2?: string;
          city?: string;
          state: string;
          postalCode: string;
          country: string;
        };
      };
    };
  };
};

export type WidgetEventProps = {
  onSuccess: (type: SuccessType, message: string, additionalInfo: any) => void;
  onError: (
    type: ErrorType,
    errorCode: number,
    message: string,
    additionalInfo: any
  ) => void;
  onEvent: (
    type: CommunicationEventType,
    message: string,
    additionalInfo: any
  ) => void;
};

export type IntuitWidgetProps = WidgetPersonaDataProps &
  WidgetEventProps & {
    bearerToken: string;
    offerType: string;
    env: string; // E2E or PRD
    headerInfo: {
      // This object will be passed in headers for tracking
      "X-<isv>-CorrelationId": string; // correlation Id to track the event in source system
      "X-Merchant-Id"?: string;
    };
  };
