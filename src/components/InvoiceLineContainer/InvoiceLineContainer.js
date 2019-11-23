import React, { Component } from "react";

import InvoiceLine from "../InvoiceLine/InvoiceLine";
import classes from "./InvoiceLineContainer.module.css";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import TotalBox from "../TotalBox/TotalBox";

export default class InvoiceLineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invoiceLines: [
        { name: "laundry", cost: "20", units: "2", description: 'yadayada' total: "40" },
        { name: "laundry", cost: "20", units: "2", total: "40" }
      ]
    };
  }

  addInvoiceLine = (name, cost, units, description, total) => {
    let newLine = { name, cost, units, description, total };
    this.setState({
      invoiceLines: [...this.state.invoiceLines, newLine]
    });
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
            <text>{line.name}</text>
          </td>
          <td>
            <text>{line.cost}</text>
          </td>
          <td>
            <text>{line.units}</text>
          </td>
          <td>
            <text>{line.description}</text>
          </td>
          <td>
            <text>${line.total}</text>
          </td>
          <td className={classes.lastCol}>
            <FaEdit />
            <IoMdClose
              className={classes.del}
              onClick={() => {
                this.deleteInvoiceLine(index);
              }}
            />
          </td>
        </tr>
      );
    });
    return (
      <div className={classes.container}>
        <InvoiceLine addLine={this.addInvoiceLine} />
        <table className={classes.itemLines}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Cost</th>
              <th>Unit</th>
              <th>Description</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>{inputRows}</tbody>
        </table>
        <TotalBox />
      </div>
    );
  }
}
