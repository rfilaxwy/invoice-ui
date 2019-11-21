import React from "react";
import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ReferenceHolder from "./components/ReferenceHolder/ReferenceHolder";
import CompanyHeader from "./components/CompanyHeader/CompanyHeader";

function App() {
  return (
    <div>
      <div className={classes.header}>
        <CompanyHeader />
        <ReferenceHolder />
      </div>
    </div>
  );
}

export default App;
