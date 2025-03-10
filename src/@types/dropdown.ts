import { LoanPurpose } from "./persona";
import { LoanPurpose as IntuitFaasLoanPurpose } from "@epgtechteam/faas-widget-library";

export interface Option {
  key: string;
  label: string;
  value: string | LoanPurpose | IntuitFaasLoanPurpose;
}
