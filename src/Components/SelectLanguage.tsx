/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from "react";
import { useTranslation } from "react-i18next";
/* -------------------------------------------------------------------------- */
/*                             SelectLanguage RFC                             */
/* -------------------------------------------------------------------------- */
const SelectLanguage: React.FC = () => {
  /* ********************************** Hooks ********************************* */
  const { t, i18n } = useTranslation();
  /* ******************************** CallBacks ******************************* */
  const handleLngChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="flex column align-center justify-center mt-5">
      <label htmlFor="language-select">select Language</label>
      <select name="select" id="language-select" onChange={handleLngChange}>
        <option value="en">Eng</option>
        <option value="fr">Fr</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
