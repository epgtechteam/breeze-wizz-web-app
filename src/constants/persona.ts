import { WidgetPersonaDataProps, LoanPurpose, Persona } from "@/@types/persona";

export const PERSONA_TYPES: { [K in Persona]: K } = {
  B2C_CK_PERSONAL_LOAN: "B2C_CK_PERSONAL_LOAN",
  B2C_CK_CREDIT_CARD: "B2C_CK_CREDIT_CARD",
  B2B_QBO_LINE_OF_CREDIT: "B2B_QBO_LINE_OF_CREDIT",
  B2B_QBO_TERM_LOAN: "B2B_QBO_TERM_LOAN",
  B2B_NONQBO_CREDIT_CARD: "B2B_NONQBO_CREDIT_CARD",
  B2B_NONQBO_BUSINESS_LOAN: "B2B_NONQBO_BUSINESS_LOAN",
};

export const PERSONA_TYPES_DROPDOWN = [
  {
    key: PERSONA_TYPES.B2C_CK_PERSONAL_LOAN,
    label: "B2C - CK Personal Loan",
    value: "B2C_CK_PERSONAL_LOAN",
  },
  {
    key: PERSONA_TYPES.B2C_CK_CREDIT_CARD,
    label: "B2C - CK Credit Card",
    value: "B2C_CK_CREDIT_CARD",
  },
  {
    key: PERSONA_TYPES.B2B_QBO_LINE_OF_CREDIT,
    label: "B2B - QBO Line of Credit",
    value: "B2B_QBO_LINE_OF_CREDIT",
  },
  {
    key: PERSONA_TYPES.B2B_QBO_TERM_LOAN,
    label: "B2B - QBO Term Loan",
    value: "B2B_QBO_TERM_LOAN",
  },
  {
    key: PERSONA_TYPES.B2B_NONQBO_CREDIT_CARD,
    label: "B2B - Non-QBO Credit Card",
    value: "B2B_NONQBO_CREDIT_CARD",
  },
  {
    key: PERSONA_TYPES.B2B_NONQBO_BUSINESS_LOAN,
    label: "B2B - Non-QBO Business Loan",
    value: "B2B_NONQBO_BUSINESS_LOAN",
  },
];

export const LOAN_PURPOSE: { [K in LoanPurpose]: K } = {
  REFINANCE_CREDIT_CARD: "REFINANCE_CREDIT_CARD",
  CONSOLIDATE_DEBT: "CONSOLIDATE_DEBT",
  HOME_IMPROVEMENT: "HOME_IMPROVEMENT",
  MAJOR_PURCHASE: "MAJOR_PURCHASE",
  COVER_UNEXPECTED_COST: "COVER_UNEXPECTED_COST",
  OTHER: "OTHER",
};

export const LOAN_PURPOSE_TYPES_DROPDOWN = [
  {
    key: LOAN_PURPOSE.REFINANCE_CREDIT_CARD,
    label: "Refinance Debit Card",
    value: LOAN_PURPOSE.REFINANCE_CREDIT_CARD,
  },
  {
    key: LOAN_PURPOSE.HOME_IMPROVEMENT,
    label: "Home Improvement",
    value: LOAN_PURPOSE.HOME_IMPROVEMENT,
  },
  {
    key: LOAN_PURPOSE.MAJOR_PURCHASE,
    label: "Major Purchase",
    value: LOAN_PURPOSE.MAJOR_PURCHASE,
  },
  {
    key: LOAN_PURPOSE.CONSOLIDATE_DEBT,
    label: "Consolidate Debit",
    value: LOAN_PURPOSE.CONSOLIDATE_DEBT,
  },
  {
    key: LOAN_PURPOSE.COVER_UNEXPECTED_COST,
    label: "Cover Unexpected Cost",
    value: LOAN_PURPOSE.COVER_UNEXPECTED_COST,
  },
  {
    key: LOAN_PURPOSE.OTHER,
    label: "Other",
    value: LOAN_PURPOSE.OTHER,
  },
];

export const PERSONA_WIDGET_DATA_PROPS: WidgetPersonaDataProps = {
  data: {
    partnerInfo: {
      id: "Test_Partner_01", // ID to identify the partner (ISV)
      name: "Test Partner",
    },
    financingApplicationInfo: {
      loanAmount: 10000, // Amount for which the offers will be fetched
      loanPurpose: LOAN_PURPOSE.HOME_IMPROVEMENT,
    },
    consumerInfo: {
      // // Recipient Info for which Offers will be fetched
      id: "Test_Consumer_01", // optional
      firstName: "Marc",
      lastName: "Thompson",
      email: "marc_thompson@gmail.com", // Recipient Email to which Offers will be fetched
      phone: "1231231234", //optional // Recipient Phone to which Offers will be fetched
      address: {
        // optional
        addressLine1: "S Livermore Ave",
        addressLine2: "",
        city: "Livermore", // optional
        state: "CA",
        postalCode: "94550",
        country: "United States",
      },
    },
    businessInfo: {
      // Business info providing the service
      id: "Test_Business_01", // optional
      logoUrl: "https://www.google.com", // optional
      businessName: "Rocket Associates & Co.",
      phone: "1234567890", // optional
      industry: "Real Estate",
      type: "Small Business",
      address: {
        // optional
        addressLine1: "1500 Warburton Avenue", // optional
        addressLine2: "",
        city: "Santa Clara", // optional
        state: "CA",
        postalCode: "95050",
        country: "United States",
      },
      ownerInfo: {
        // Merchant Personal Information
        id: "Test_Owner_01", // optional
        firstName: "James",
        lastName: "Henry",
        email: "james_henry@gmail.com",
        phone: "3423425678", // optional
        address: {
          // optional
          addressLine1: "90th Street", // optional
          addressLine2: "",
          city: "Daly City", // optional
          state: "CA",
          postalCode: "94015",
          country: "United States",
        },
      },
    },
  },
};
