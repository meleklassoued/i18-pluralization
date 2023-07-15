/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from "react";
import PluralExample from "./Components/PluralExample";
// styles
import "./App.css";
import SelectLanguage from "./Components/SelectLanguage";
/* -------------------------------------------------------------------------- */
/*                                App component                               */
/* -------------------------------------------------------------------------- */
function App() {
  /* ******************************** Rendering ******************************* */
  return (
    <div className="App">
      <header className="App-header">
        <PluralExample />
        <SelectLanguage />
      </header>
    </div>
  );
}

export default App;
