import { useState } from "react";
import Content from "../../components/Content";
import Header from "../Header/Header";
import { LanguageContext } from "../../pages/Language/LanguageContext";
export default function App() {
  const [lng, setlng] = useState("am");
  return (
    <div className="App">
      <LanguageContext.Provider value={lng}>
        <Header onChangeLanguage={setlng} />
        <Content />
      </LanguageContext.Provider>
    </div>
  );
}

export { LanguageContext };
