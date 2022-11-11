import logo from "./logo.svg";
import "./App.css";
import Landing from "./page/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import Download from "./page/Download";
import BrandStory from "./page/BrandStory";
import News from "./page/News";

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
            <Route path="/news" element={<News />} />
            <Route path="/download" element={<Download />} />
            <Route path="/brand-story" element={<BrandStory />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
