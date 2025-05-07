import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Router } from "./routes/Router";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Router/>
      <Footer/>
    </>
  );
}

export default App;
