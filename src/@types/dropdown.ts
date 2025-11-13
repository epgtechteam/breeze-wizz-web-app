import { LoanPurpose } from "./persona";
export interface Option {
  key: string;
  label: string;
  value: string | LoanPurpose;
}
