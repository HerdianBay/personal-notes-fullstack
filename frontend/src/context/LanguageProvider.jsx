import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved !== null) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const state = prev === "id" ? "en" : "id";
      localStorage.setItem("language", state);
      return state;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
