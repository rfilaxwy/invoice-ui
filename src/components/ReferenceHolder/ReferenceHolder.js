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
    console.log(name);
    let refArr = this.state.referenceInputs;
    let index;
    for (let i = 0; i < refArr.length; i++) {
      if (refArr[i].name === name) {
        refArr[i].input = value;
        index = i;
      }
    }
    console.log(refArr);
    this.setState({ referenceInputs: refArr });
  };

  render() {
    let referenceInputs = this.state.referenceInputs.map(ref => {
      return <LineItem data={ref} update={this.handleInput} />;
    });
    return (
      <div className={classes.refBox}>
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>Invoice Number: {this.props.invoiceNumber}</Card.Header>
          <Card.Body>{referenceInputs}</Card.Body>
        </Card>
      </div>
    );
  }
}
