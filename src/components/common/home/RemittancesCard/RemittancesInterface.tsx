import { CountryCode } from "../../Flag/Flag";

export interface RemittancesInterface {
  id: number;
  name: string;
  business: string;
  initials: string;
  flag: CountryCode;
}
