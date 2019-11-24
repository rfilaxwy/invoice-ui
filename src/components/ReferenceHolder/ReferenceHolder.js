import React, { Component } from "react";
import classes from "./ReferenceHolder.module.css";
import { Card } from "react-bootstrap";
import LineItem from "../LineItem/LineItem";

export default class TaskAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceNumber: "INV000001",
      referenceInputs: [
        {
          name: "Invoice Date",
          input: "", //Get previous invoice number add one to it.
          edit: true,
          type: "date"
        },
        {
          name: "Reference PO",
          input: "", //Get previous invoice number add one to it.
          edit: true,
          type: ""
        },
        {
          name: "PO Date",
          input: "", //Get previous invoice number add one to it.
          edit: true,
          type: "date"
        }
      ]
    };
  }

  handleInput = (input, name) => {
    let value = input;
    let refArr = this.state.referenceInputs;
    for (let i = 0; i < refArr.length; i++) {
      if (refArr[i].name === name) {
        refArr[i].input = value;
      }
    }
    this.setState({ referenceInputs: refArr });
  };

  render() {
    let referenceInputs = this.state.referenceInputs.map((ref, i) => {
      return <LineItem key={i} data={ref} update={this.handleInput} />;
    });
    return (
      <div className={classes.refBox}>
        <Card border="light" className={classes.cardPrimary}>
          <Card.Header>Invoice Number: {this.state.invoiceNumber}</Card.Header>
          <Card.Body>{referenceInputs}</Card.Body>
        </Card>
      </div>
    );
  }
}
