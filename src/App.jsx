import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/body";
import Footer from "./components/Footer/Footer";
// router
import Vanilla from "./components/Products/Vanilla";
import Baccaraat from "./components/Products/Baccaraat";
import AcneCream from "./components/Products/AcneCream";
import Deodorant from "./components/Products/Deodorant";
import Monosparkle from "./components/Products/Monosparkle";

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
        path="/vanilla"
        element={
          <>
            <Header />
            <Vanilla />
            <Footer />
          </>
        }
      />
      <Route
        path="/baccaraat"
        element={
          <>
            <Header />
            <Baccaraat />
            <Footer />
          </>
        }
      />
      <Route
        path="/monosparkle"
        element={
          <>
            <Header />
            <Monosparkle />
            <Footer />
          </>
        }
      />
      <Route
        path="/deodorant"
        element={
          <>
            <Header />
            <Deodorant />
            <Footer />
          </>
        }
      />
      <Route
        path="/acneCream"
        element={
          <>
            <Header />
            <AcneCream />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
