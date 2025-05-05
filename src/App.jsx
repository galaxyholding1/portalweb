import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router";
import "./App.css";
import { Router } from "./routes/Router";

function App() {
  return (
    <>
      <Navbar/>
      <Router/>
    </>
  );
}

export default App;
