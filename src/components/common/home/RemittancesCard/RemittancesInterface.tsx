import { CountryCode } from "../../Flag/Flag";

// RemittancesInterface.tsx
// This interface defines the structure for remittance contact information.
export interface RemittancesInterface {
  id: number;
  name: string;
  business: string;
  initials: string;
  flag: CountryCode;
}
