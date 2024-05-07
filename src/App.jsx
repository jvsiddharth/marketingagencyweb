import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HowItWorks from "./components/HowItWorks"; // Make sure to replace "./path/to/HowItWorks" with the correct path to your HowItWorks component
import OurWork from "./pages/PxPortfolioTemplate";
import AboutUs from "./pages/PxAboutPage";
import Pricing from "./components/Pricing";
import ContactUs from "./pages/ContactUs1";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const action = location.action;
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "This is the landing page of our website.";
        break;
      // Add cases for other routes here
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/book-a-call" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
