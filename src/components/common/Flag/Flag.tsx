import Co from "../../../assets/icons/flags/co.svg?react";
import Ve from "../../../assets/icons/flags/ve.svg?react";
import Us from "../../../assets/icons/flags/us.svg?react";
import Mx from "../../../assets/icons/flags/mx.svg?react";

// Flag component with flags for Colombia, USA, Mexico, and Venezuela
export type CountryCode = "co" | "us" | "mx" | "ve";

const countryMap = {
  co: Co,
  us: Us,
  mx: Mx,
  ve: Ve,
};

interface Props {
  style?: React.CSSProperties;
  code: CountryCode;
}

// Style for the flags
export const Flag = ({ style, code }: Props) => {
  const styles = { width: "24px", aspectRatio: 1, ...style };

  const Icon = countryMap[code];
  if (!Icon) return <Co style={styles} />;
  return <Icon style={styles}></Icon>;
};