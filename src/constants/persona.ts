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
      id: "1",
      name: "Awesome ISV partner",
    },
    financingApplicationInfo: {
      loanAmount: 20000.0,
      loanPurpose: "HOME_IMPROVEMENT",
    },
    consumerInfo: {
      id: "123",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: {
        addressLine1: "123 Main St",
        addressLine2: "",
        city: "Anytown",
        state: "Anystate",
        postalCode: "12345",
        country: "USA",
      },
    },
    businessInfo: {
      id: "456",
      logoUrl: "https://example.com/logo.png",
      businessName: "Business Name",
      email: "contact@business.com",
      phone: "987-654-3210",
      industry: "INTERIOR_DESIGN",
      type: "LIMITED_LIABILITY_COMPANY",
      address: {
        addressLine1: "456 Business Blvd",
        addressLine2: "",
        city: "Businesstown",
        state: "Businessstate",
        postalCode: "54321",
        country: "USA",
      },
      ownerInfo: {
        id: "789",
        email: "owner@business.com",
        firstName: "Jane",
        lastName: "Smith",
        phone: "112-233-4455",
        address: {
          addressLine1: "789 Owner Ave",
          addressLine2: "",
          city: "Ownertown",
          state: "Ownerstate",
          postalCode: "67890",
          country: "USA",
        },
      },
    },
  },
};
