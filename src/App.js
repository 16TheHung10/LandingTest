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
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/pool-app-store" element={<OtherPage />} />
            <Route path="/pool-wallet" element={<OtherPage2 />} />
            <Route path="/pool-app-cards" element={<OtherPage3 />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
