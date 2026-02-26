/**
 * Main layout component that wraps content with Header and Footer
 */
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
