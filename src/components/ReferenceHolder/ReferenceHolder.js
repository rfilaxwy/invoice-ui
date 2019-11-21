import React, { Component } from "react";
import classes from "./ReferenceHolder.module.css";

import LineItem from "../LineItem/LineItem";

export default class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      referenceInputs: [
        {
          name: "Invoice Number",
          input: "", //Get previous invoice number add one to it.
          edit: false
        },
        {
          name: "Invoice Date",
          input: "", //Get previous invoice number add one to it.
          edit: true
        },
        {
          name: "Reference PO",
          input: "", //Get previous invoice number add one to it.
          edit: true
        },
        {
          name: "PO Date",
          input: "", //Get previous invoice number add one to it.
          edit: true
        }
      ]
    };
  }

  render() {
    let referenceInputs = this.state.referenceInputs.map(ref => {
      return <LineItem data={ref} />;
    });
    return <div>{referenceInputs}</div>;
  }
}
