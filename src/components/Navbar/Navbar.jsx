import "./Navbar.css";

import { useLocation } from "react-router-dom";

import { useTheme } from "../../store/theme-store";
import { iconByTheme } from "../../util/app-icon-by-theme";
import { LandingLinks } from "./LandingLinks/LandingLinks";
import { GuestNavbar } from "./GuestNavbar/GuestNavbar";
import { useAuthStore } from "../../store/auth-store";
import { useMemo } from "react";
import { LoggedLinks } from "./LoggedLinks/LoggedLinks";


const guestLinks = [
  "/login-personas",
  "/login-empresas",
  "/"
]

export const Navbar = () => {
 
  const { pathname } = useLocation();
  
  const { theme } = useTheme();
  const { isAuthenticated } = useAuthStore();
  
  const enableLinks = useMemo(() => guestLinks.includes(pathname), [pathname]);
  return (
    <>
      { !isAuthenticated && <GuestNavbar/> }
      <nav className="navbar-galaxy">
        <a href="/">
          <img src={iconByTheme[theme]} alt="logo" />
        </a>

        {enableLinks ? <LandingLinks/> : <LoggedLinks/> }
      </nav>
    </>
  );
};
