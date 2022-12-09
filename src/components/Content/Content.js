import { useContext, useMemo } from "react";
import { LanguageContext } from "../../pages/Language";
import translate from "../../translate";

export default function Translate(props) {
  const lng = useContext(LanguageContext);
  const t = useMemo(() => {
    return translate[lng];
  }, [lng]);

  return <div>{t.text}</div>;
}
