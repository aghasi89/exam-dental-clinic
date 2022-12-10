import LanguageContext from "./pages/Language/LanguageContext";
import tranlsation from "./translate.json";
import { useContext } from "react";

const useDoc = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const languagObj = tranlsation[language];

  const doc = (key) => {
    const text = languagObj[key];
    if (text) {
      return text;
    } else {
      console.error("Error ", key);
    }
  };
  return { doc, language, changeLanguage };
};

export default useDoc;
