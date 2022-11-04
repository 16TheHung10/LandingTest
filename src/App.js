import logo from "./logo.svg";
import "./App.css";
import OtherPage from "./components/OtherPage1/OtherPage";
import Landing from "./page/Landing";
import OtherPage2 from "./components/OtherPage2/OtherPage";
import OtherPage3 from "./components/OtherPage3/OtherPage";
import Comp from "./page/Comp/Comp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import ShoppingMall from "./components/ImgaeLeftContentRight/One/ShoppingMall";
import ContactUs from "./components/ContactUs/ContactUs";
import MarketPlace from "./components/ImgaeLeftContentRight/Two/MarketPlace";
import Decentralized from "./components/Decentralized/Decentralized";

export const AppContext = createContext();
function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState();
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  console.log("re-render");
  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      <div className="App">
        {/* <ToastContainer /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pool-app-store" element={<OtherPage />} />
            <Route path="/pool-wallet" element={<OtherPage2 />} />
            <Route path="/pool-cards" element={<OtherPage3 />} />
            <Route path="/shopping-mall" element={<ShoppingMall />} />
            <Route path="/shopping-mall" element={<ShoppingMall />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/market-place" element={<MarketPlace />} />
            <Route path="/decentralized" element={<Decentralized />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
