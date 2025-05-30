import "./App.css";
import { Router } from "./routes/Router";
import { useEffect } from "react";
import { Footer } from "./components/layout/Footer/Footer";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { themeListener } from "./util/theme-listener";
import { GlobalModal } from "./components/common/ui/modal/modal";

function App() {
  // Escucha cambios del sistema en tiempo real
  useEffect(() => {
    const killListener = themeListener()
    return killListener;
  }, []);

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content">
          <Router />
        </div>
        <Footer/>
      </div>
      <GlobalModal/>
    </>
  );
}

export default App;
