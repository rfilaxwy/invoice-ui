import React from "react";
import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ReferenceHolder from "./components/ReferenceHolder/ReferenceHolder";
import CompanyHeader from "./components/CompanyHeader/CompanyHeader";
import InvoiceLineContainer from "./components/InvoiceLineContainer/InvoiceLineContainer";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <CompanyHeader />
        <ReferenceHolder />
      </div>
      <InvoiceLineContainer />
    </div>
  );
}

export default App;
