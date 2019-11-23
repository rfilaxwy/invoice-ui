import React from "react";

import { Card } from "react-bootstrap";

const TotalBox = props => {
  return (
    <Card border="secondary" style={{ width: "18rem" }}>
      <Card.Header>Invoice Total</Card.Header>
      <Card.Body>
        <table>
          <tbody>
            <tr>
              <td>Sub Total</td>
              <td>with two columns</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>with two columns</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};
export default TotalBox;
