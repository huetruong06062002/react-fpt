import "./App.css";
import Main from "./components/Main";
import FooterEx from "./components/FooterEx";
import NavEx from "./components/NavEx";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <NavEx />

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <FooterEx />
    </>
  );
}

export default App;
