import { WidgetPersonaDataProps, LoanPurpose, Persona } from "@/@types/persona";

export const LOAN_PURPOSE: { [K in LoanPurpose]: K } = {
  REFINANCE_CREDIT_CARD: "REFINANCE_CREDIT_CARD",
  CONSOLIDATE_DEBT: "CONSOLIDATE_DEBT",
  HOME_IMPROVEMENT: "HOME_IMPROVEMENT",
  MAJOR_PURCHASE: "MAJOR_PURCHASE",
  COVER_UNEXPECTED_COST: "COVER_UNEXPECTED_COST",
  OTHER: "OTHER",
};

export const PERSONA_TYPES: { [K in Persona]: K } = {
  B2C_PERSONAL_LOAN: "B2C_PERSONAL_LOAN",
  B2C_CREDIT_CARD: "B2C_CREDIT_CARD",
  B2C_LIGHTBOX_EVERYWHERE: "B2C_LIGHTBOX_EVERYWHERE",
  B2B_LINE_OF_CREDIT: "B2B_LINE_OF_CREDIT",
  B2B_BUSINESS_CREDIT_CARD: "B2B_BUSINESS_CREDIT_CARD",
};

export const PERSONA_TYPES_DROPDOWN = [
  { key: PERSONA_TYPES.B2C_PERSONAL_LOAN, label: "B2C - Personal Loan" },
  { key: PERSONA_TYPES.B2C_CREDIT_CARD, label: "B2C - Credit Card" },
  {
    key: PERSONA_TYPES.B2C_LIGHTBOX_EVERYWHERE,
    label: "B2C - Lightbox Everywhere",
  },
  { key: PERSONA_TYPES.B2B_LINE_OF_CREDIT, label: "B2C - Line of Credit" },
  {
    key: PERSONA_TYPES.B2B_BUSINESS_CREDIT_CARD,
    label: "B2C - Business Credit Card",
  },
];

const PERSONA_WIDGET_DATA_PROPS: WidgetPersonaDataProps = {
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
        street: "S Livermore Ave", // optional
        city: "Livermore", // optional
        state: "CA",
        postalCode: "94550",
        country: "United States",
      },
    },
    businessInfo: {
      // Business info providing the service
      id: "Test_Business_01", // optional
      taxIdentifcationNumber: "TIN11223344", // optional
      logoUrl: "https://www.google.com", // optional
      businessName: "Rocket Associates & Co.",
      phone: "1234567890", // optional
      industry: "Real Estate",
      type: "Small Business",
      address: {
        // optional
        street: "1500 Warburton Avenue", // optional
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
          street: "90th Street", // optional
          city: "Daly City", // optional
          state: "CA",
          postalCode: "94015",
          country: "United States",
        },
      },
    },
  },
};

export const PERSONA_WIDGET_PROPS = {
  [PERSONA_TYPES.B2C_PERSONAL_LOAN]: { ...PERSONA_WIDGET_DATA_PROPS },
  [PERSONA_TYPES.B2C_CREDIT_CARD]: { ...PERSONA_WIDGET_DATA_PROPS },
  [PERSONA_TYPES.B2C_LIGHTBOX_EVERYWHERE]: { ...PERSONA_WIDGET_DATA_PROPS },
  [PERSONA_TYPES.B2B_LINE_OF_CREDIT]: { ...PERSONA_WIDGET_DATA_PROPS },
  [PERSONA_TYPES.B2B_BUSINESS_CREDIT_CARD]: { ...PERSONA_WIDGET_DATA_PROPS },
};
