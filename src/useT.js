import LanguageContext from "./pages/Language/LanguageContext";
import tranlsation from "./translate.json";
import { useContext } from "react";

const useT = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const languagObj = tranlsation[language];

  const t = (key) => {
    const text = languagObj[key];
    if (text) {
      return text;
    } else {
      console.error("MISSING TRANSLATION FOR THIS KEY ", key);
    }
  };
  return { t, language, changeLanguage };
};

export default useT;
