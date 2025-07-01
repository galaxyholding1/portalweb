import "./App.css";
import { Router } from "./routes/Router";
import { useEffect } from "react";
import { Footer } from "./components/layout/Footer/Footer";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { themeListener } from "./util/theme-listener";
import { GlobalModal } from "./components/common/ui/modal/modal";

function App() {
  // Detects operating system theme changes
  // And automatically changes the application's theme
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