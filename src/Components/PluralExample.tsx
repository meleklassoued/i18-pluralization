/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
/* -------------------------------------------------------------------------- */
/*                              Plural-component                              */
/* -------------------------------------------------------------------------- */
const PluralExample: React.FC = () => {
  /* ****************************** Hooks & consts ***************************** */
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);
  const bookPluralization: string = t("count", { count });

  /* ******************************** callBacks ******************************* */
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  /* ******************************** Rendering ******************************* */
  return (
    <div>
      <p>{bookPluralization}</p>
      <button onClick={handleIncrement}>click</button>
    </div>
  );
};

export default PluralExample;
