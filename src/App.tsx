/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
// Packages
import React from "react";
import PluralExample from "./Components/PluralExample";
// styles
import "./App.css";
/* -------------------------------------------------------------------------- */
/*                                App component                               */
/* -------------------------------------------------------------------------- */
function App() {
  /* ******************************** Rendering ******************************* */
  return (
    <div className="App">
      <header className="App-header">
        <PluralExample />
      </header>
    </div>
  );
}

export default App;
