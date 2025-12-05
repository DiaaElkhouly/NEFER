import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/body";
import Footer from "./components/Footer/Footer";
// router
import Product from "./components/Products/Product";
import AboutNefer from "./components/Footer/AboutNefer";
import OurMembers from "./components/Footer/ourMembers";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Body />
            <Footer />
          </>
        }
      />
      <Route
        path="/aboutNefer"
        element={
          <>
            <Header />
            <AboutNefer />
            <Footer />
          </>
        }
      />
      <Route
        path="/ourMembers"
        element={
          <>
            <Header />
            <OurMembers />
            <Footer />
          </>
        }
      />
      <Route path="/:type/:productName" element={<Product />} />
    </Routes>
  );
}

export default App;
