import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Router } from "./routes/Router";
import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { themeListener } from "./util/theme-listener";

function App() {
  // Escucha cambios del sistema en tiempo real
  useEffect(() => {
    const killListener = themeListener()
    return killListener;
  }, []);

  return (
    <>
      <Navbar />
      <Router />
      <Footer/>
    </>
  );
}

export default App;
