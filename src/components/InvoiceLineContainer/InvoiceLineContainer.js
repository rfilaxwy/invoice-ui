import React, { Component } from "react";

import InvoiceLine from "../InvoiceLine/InvoiceLine";
import classes from "./InvoiceLineContainer.module.css";
import { Button } from "react-bootstrap";

export default class InvoiceLineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceLines: [
        { name: "laundry", cost: "20", units: "2", total: "40" },
        { name: "laundry", cost: "20", units: "2", total: "40" }
      ]
    };
  }

  addInvoiceLine = (name, cost, units, total) => {
    let newLine = { name, cost, units, total };
    this.setState({
      invoiceLines: [...this.state.invoiceLines, newLine]
    });
    console.log(this.state.invoiceLines);
    // this.setState(prevState => ({
    //   invoiceLInes: [...prevState.invoiceLines, newLine]
    // }));
  };
  deleteInvoiceLine = index => {
    let oldInvoiceLines = this.state.invoiceLines;
    oldInvoiceLines.splice(index, 1);
    this.setState({ invoiceLines: oldInvoiceLines });
  };

  render() {
    let inputRows = this.state.invoiceLines.map((line, index) => {
      return (
        <tr key={index}>
          <td>
            {line.name}
            <button>Edit</button>
          </td>
          <td>
            {line.cost}
            <button>Edit</button>
          </td>
          <td>
            {line.units}
            <button>Edit</button>
          </td>
          <td>
            {line.total}
            <button>Edit</button>
          </td>

          <Button
            onClick={() => {
              this.deleteInvoiceLine(index);
            }}
          >
            Delete
          </Button>
        </tr>
      );
    });
    return (
      <div>
        <InvoiceLine addLine={this.addInvoiceLine} />
        <table className={classes.itemLines}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Cost</th>
              <th>Unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{inputRows}</tbody>
        </table>
      </div>
    );
  }
}
