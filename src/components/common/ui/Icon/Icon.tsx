import React from "react";
import { useTheme } from "../../../../store/theme-store";

// Individual icon imports
import ArrowLeftRight from "../../../../assets/icons/arrow_left_right.svg?react";
import BellRing from "../../../../assets/icons/bell_ring.svg?react";
import Cents from "../../../../assets/icons/cents.svg?react";
import CertificadosBancarios from "../../../../assets/icons/certificados_bancarios.svg?react";
import ChatCircleRemove from "../../../../assets/icons/chat_circle_remove.svg?react";
import ChevronDown from "../../../../assets/icons/chevron_down.svg?react";
import ChevronRight from "../../../../assets/icons/chevron_right.svg?react";
import CreditCard from "../../../../assets/icons/credit_card.svg?react";
import DocumentsIcon from "../../../../assets/icons/documents_icon.svg?react";
import Eye from "../../../../assets/icons/eye.svg?react";
import EyeOff from "../../../../assets/icons/eye_off.svg?react";
import FacebookIcon from "../../../../assets/icons/facebook_icon.svg?react";
import FacebookIconDark from "../../../../assets/icons/facebook_icon_dark.svg?react";
import FileDocument from "../../../../assets/icons/file_document.svg?react";
import FileEdit from "../../../../assets/icons/file_edit.svg?react";
import GalaxyLogoNoText from "../../../../assets/icons/galaxy_logo_notext.svg?react";
import Handbag from "../../../../assets/icons/handbag.svg?react";
import Help from "../../../../assets/icons/help.svg?react";
import Home from "../../../../assets/icons/home.svg?react";
import InicioIcon from "../../../../assets/icons/inicio_icon.svg?react";
import InstagramIcon from "../../../../assets/icons/instagram_icon.svg?react";
import InstagramIconDark from "../../../../assets/icons/instagram_icon_dark.svg?react";
import Lock from "../../../../assets/icons/lock.svg?react";
import Logout from "../../../../assets/icons/logout.svg?react";
import LogoGalaxy from "../../../../assets/icons/logo_galaxy.svg?react";
import LogoGalaxyDark from "../../../../assets/icons/logo_galaxy_dark.svg?react";
import Money from "../../../../assets/icons/money.svg?react";
import MovingDesk from "../../../../assets/icons/moving_desk.svg?react";
import NegociarDeuda from "../../../../assets/icons/negociar_deuda.svg?react";
import NoteSearch from "../../../../assets/icons/note_search.svg?react";
import NotFound from "../../../../assets/icons/not_found.svg?react";
import Pago from "../../../../assets/icons/pago.svg?react";
import Printer from "../../../../assets/icons/printer.svg?react";
import ProductsIcon from "../../../../assets/icons/products_icon.svg?react";
import Remesas from "../../../../assets/icons/remesas.svg?react";
import RemesasIcon from "../../../../assets/icons/remesas_icon.svg?react";
import SaveTest from "../../../../assets/icons/save-test.svg?react";
import Save from "../../../../assets/icons/save.svg?react";
import Setup from "../../../../assets/icons/setup.svg?react";
import Shield from "../../../../assets/icons/shield.svg?react";
import SolicitaTurno from "../../../../assets/icons/solicita_turno.svg?react";
import SquareHelp from "../../../../assets/icons/square_help.svg?react";
import Switch from "../../../../assets/icons/switch.svg?react";
import Ticket from "../../../../assets/icons/ticket.svg?react";
import TramitesDigitales from "../../../../assets/icons/tramites_digitales.svg?react";
import VerMasIcon from "../../../../assets/icons/ver_mas_icon.svg?react";
import XIcon from "../../../../assets/icons/x_icon.svg?react";
import XIconDark from "../../../../assets/icons/x_icon_dark.svg?react";
import TriangleWarning from "../../../../assets/icons/triangle_warning.svg?react";
import AddPlus from "../../../../assets/icons/add_plus.svg?react";
import Search from "../../../../assets/icons/search.svg?react";
import Slider from "../../../../assets/icons/slider.svg?react";
import addPlusCircle from "../../../../assets/icons/add_plus_circle.svg?react";
import pdf from "../../../../assets/icons/pdf_icon.svg?react";
import userIcon from "../../../../assets/icons/user_icon.svg?react";
import minusIcon from "../../../../assets/icons/remove_minus_icon.svg?react";
import sendSuccessful from "../../../../assets/icons/send-successful-icon.svg?react";

import leftarrow from "../../../../assets/icons/arrow-circle-left.svg?react";
import rightarrow from "../../../../assets/icons/arrow-circle-right.svg?react";
import icSearch from "../../../../assets/icons/ic-search.svg?react";
import icUser from "../../../../assets/icons/ic-user.svg?react";
import icStatePending from "../../../../assets/icons/ic-state-pending.svg?react";
import bdgeOk from "../../../../assets/icons/bdge_ok.svg?react";
import calendarDays from "../../../../assets/icons/calendar_days.svg?react";
import Moon from "../../../../assets/icons/moon.svg?react";
import Sun from "../../../../assets/icons/sun.svg?react";

// Mapping from the key, which will be the one indicated in the component
export const iconsMap = {
  arrow_left_right: ArrowLeftRight,
  bell_ring: BellRing,
  cents: Cents,
  certificados_bancarios: CertificadosBancarios,
  chat_circle_remove: ChatCircleRemove,
  chevron_down: ChevronDown,
  chevron_right: ChevronRight,
  credit_card: CreditCard,
  documents_icon: DocumentsIcon,
  eye: Eye,
  eye_off: EyeOff,
  facebook: FacebookIcon,
  facebook_dark: FacebookIconDark,
  file_document: FileDocument,
  file_edit: FileEdit,
  galaxy_logo_notext: GalaxyLogoNoText,
  handbag: Handbag,
  help: Help,
  home: Home,
  inicio_icon: InicioIcon,
  instagram: InstagramIcon,
  instagram_dark: InstagramIconDark,
  lock: Lock,
  logout: Logout,
  logo_galaxy: LogoGalaxy,
  logo_galaxy_dark: LogoGalaxyDark,
  money: Money,
  moving_desk: MovingDesk,
  minus_icon: minusIcon,
  negociar_deuda: NegociarDeuda,
  note_search: NoteSearch,
  not_found: NotFound,
  pago: Pago,
  pdf_icon: pdf,
  printer: Printer,
  products_icon: ProductsIcon,
  remesas: Remesas,
  remesas_icon: RemesasIcon,
  save_test: SaveTest,
  save: Save,
  setup: Setup,
  shield: Shield,
  solicita_turno: SolicitaTurno,
  send_successful: sendSuccessful,
  square_help: SquareHelp,
  switch: Switch,
  ticket: Ticket,
  tramites_digitales: TramitesDigitales,
  ver_mas_icon: VerMasIcon,
  user_icon: userIcon,
  x: XIcon,
  x_dark: XIconDark,
  leftarrow: leftarrow,
  rightarrow: rightarrow,
  icSearch: icSearch,
  icUser: icUser,
  icStatePending: icStatePending,
  bdgeOk: bdgeOk,
  triangle_warning: TriangleWarning,
  add_plus: AddPlus,
  search: Search,
  slider: Slider,
  calendar_days: calendarDays,
  add_plus_circle: addPlusCircle,
  moon: Moon,
  sun: Sun,
};

type IconName = keyof typeof iconsMap;

interface IconProps {
  name: IconName;
  width?: number;
  color?: string;
  className?: string;
  height?: number;
  aspectRatio?: number;
  onClick?: () => void;
}

// Author: Juan Ayala
// The Icon component is a component that allows rendering
// an SVG icon based on its name. It uses an icon map.
// If the icon is not found, it renders a "Not Found" icon.
// If it finds a dark version and it is the chosen theme, it uses it (suffix _dark).
export const Icon = ({
  name,
  width = 24,
  height,
  color = "var(--text-color)",
  aspectRatio = 1,
  className,
  onClick = () => {},
}: IconProps) => {
  const { theme } = useTheme();

  if (color !== "var(--text-color)") {
    // colorTransform is a wrapper to easily transform colors
    // to CSS variables.
    color = colorTransform(color);
  }

  //SECTION Existence verification

  const iconKey =
    theme === "dark" && iconsMap[`${name}_dark`] ? `${name}_dark` : name;

  const IconComponent = iconsMap[iconKey] as
    | React.FC<React.SVGProps<SVGSVGElement>>
    | undefined;

  if (!IconComponent)
    return <NotFound width={24} color="red" className={className} />;
  //!SECTION
  return (
    <IconComponent
      color={color}
      width={width}
      height={height ?? "auto"}
      className={className ?? ""}
      aspect-ratio={aspectRatio}
      onClick={onClick}
    />
  );
};

// colorTransform is a helper function that converts
// predefined color strings into corresponding CSS variables.
const colorTransform = (color: string) => {
  switch (color) {
    case "primary":
      return "var(--primary-color)";
    case "secondary":
      return "var(--secondary-color)";
    case "tertiary":
      return "var(--tertiary-color)";
    case "bg-primary":
      return "var(--bg-primary)";
    case "bg-secondary":
      return "var(--bg-secondary)";
    case "bg-tertiary":
      return "var(--bg-tertiary)";
    case "border":
      return "var(--border-color)";
    case "text":
      return "var(--text-color)";
    default:
      return color;
  }
};
