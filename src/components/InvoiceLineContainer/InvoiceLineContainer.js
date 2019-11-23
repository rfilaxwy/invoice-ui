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
      modalShow: false,
      setModalShow: false,
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
            <text>{line.name}</text>
            <FaEdit />
          </td>
          <td>
            <text>{line.cost}</text>
            <FaEdit />
          </td>
          <td>
            <text>{line.units}</text>
            <FaEdit />
          </td>
          <td>
            <text>${line.total}</text>
            <FaEdit />
          </td>
          <td className={classes.lastCol}>
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
