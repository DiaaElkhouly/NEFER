import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/body";
import Footer from "./components/Footer/Footer";
// router
import Product from "./components/Products/Product";

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
      <Route path="/:type/:productName" element={<Product />} />
    </Routes>
  );
}

export default App;
