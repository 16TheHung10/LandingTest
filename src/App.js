import logo from "./logo.svg";
import "./App.css";
import Landing from "./page/Landing";
import Comp from "./page/Comp/Comp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import ShoppingMall from "./components/ImgaeLeftContentRight/One/ShoppingMall";
import ContactUs from "./components/ContactUs/ContactUs";
import MarketPlace from "./components/ImgaeLeftContentRight/Two/MarketPlace";
import Decentralized from "./components/Decentralized/Decentralized";
import RewardMusic from "./components/GroupOtherPage/RewardMusic/RewardMusic";
import NFTCamera from "./components/GroupOtherPage/NFTCamera/NFTCamera";
import Download from "./components/Download/Download";
import Brand from "./components/Brand/Brand";

export const AppContext = createContext();
function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  // console.log("re-render");

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/shopping-mall" element={<ShoppingMall />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/market-place" element={<MarketPlace />} />
            <Route path="/decentralized" element={<Decentralized />} />
            <Route path="/reward-music" element={<RewardMusic />} />
            <Route path="/nft-camera" element={<NFTCamera />} /> */}

            <Route path="/download" element={<Download />} />
            <Route path="/brand-story" element={<Brand />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
