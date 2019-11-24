import React, { useState } from "react";
import { Card } from "react-bootstrap";

import classes from "./TotalBox.module.css";

const TotalBox = props => {
  const [tax, setTax] = useState(0);
  return (
    <Card border="secondary" className={classes.tBox}>
      <Card.Header>Invoice Total</Card.Header>
      <Card.Body>
        <table>
          <tbody>
            <tr>
              <td>Sub Total</td>
              <td>${parseFloat(props.subTotal).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>
                <select
                  onChange={e => {
                    setTax(e.target.value);
                  }}
                >
                  <option>0</option>
                  <option>5</option>
                  <option>7</option>
                  <option>9</option>
                  <option>12</option>
                </select>
                %
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td>
                $
                {(
                  parseFloat(props.subTotal) +
                  parseFloat(props.subTotal) * (parseFloat(tax) / 100)
                ).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};
export default TotalBox;
