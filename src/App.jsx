import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useScrollToTop } from "./hooks";
import { HomePage, AboutPage, MembersPage, ProductPage } from "./features";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutNefer" element={<AboutPage />} />
          <Route path="/ourMembers" element={<MembersPage />} />
          <Route path="/:type/:productName" element={<ProductPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
