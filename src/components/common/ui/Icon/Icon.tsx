import React from "react";
import { useTheme } from "../../../../store/theme-store";

// Importa todos los íconos SVG como módulos usando Vite
const icons = import.meta.glob("../../../../assets/icons/*.svg", {
  eager: true,
});

const notFoundIcon = (
  icons[`../../../../assets/icons/not_found.svg`] as
    | { default: string }
    | undefined
).default;

type IconName = "money" | "moving_desk" | "cents" | "arrow_left_right" | "file_document";

interface IconProps {
  name: IconName;
  selected?: boolean;
  filter?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  selected = false,
  filter,
}) => {
  const { theme } = useTheme();

  const iconName =
    name + (theme === "dark" ? "_dark" : "") + (selected ? "-selected" : "");
  const iconPath = icons[`../../../../assets/icons/${iconName}.svg`] as
    | { default: string }
    | undefined;

  const style = filter ? { filter } : {};

  if (!iconPath) {
    // Se busca el tema contrario y mismo select
    let newIconName =
      name + (theme === "light" ? "_dark" : "") + (selected ? "-selected" : "");
    let newIconPath = icons[`../../../../assets/icons/${newIconName}.svg`] as
      | { default: string }
      | undefined;
    if (newIconPath)
      return <img src={newIconPath.default} alt={name} style={style} />;

    // Se busca el tema contrario y diferente select
    newIconName =
      name +
      (theme === "light" ? "_dark" : "") +
      (!selected ? "-selected" : "");
    newIconPath = icons[`../../../../assets/icons/${newIconName}.svg`] as
      | { default: string }
      | undefined;

    if (newIconPath)
      return <img src={newIconPath.default} alt={name} style={style} />;

    // Se busca el mismo tema y diferente select
    newIconName =
      name + (theme === "dark" ? "_dark" : "") + (!selected ? "-selected" : "");
    newIconPath = icons[`../../../../assets/icons/${newIconName}.svg`] as
      | { default: string }
      | undefined;

    if (newIconPath)
      return <img src={newIconPath.default} alt={name} style={style} />;

    return <img src={notFoundIcon} alt={name} style={style} width={24} />;
  }

  return <img src={iconPath.default} alt={name} style={style} />;
};
