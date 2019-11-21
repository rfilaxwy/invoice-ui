import React, { Component } from "react";

import { Card } from "react-bootstrap";
import classes from "./CompanyHeader.module.css";

export default class CompanyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "Big Company ltd.",
      address: "13954 Gargantuan Blvd",
      city: "Scranton",
      province: "MB",
      postalCode: "T5T T5T",
      email: "name@place.ca" //maybe move this.
    };
  }

  //Add a modal popup to change company address

  render() {
    let co = this.state;
    let address = `${co.address}
    ${co.city}, ${co.province}
    ${co.postalCode}`;
    return (
      <div>
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>{co.companyName}</Card.Header>
          <Card.Body>
            <Card.Title>Invoice</Card.Title>
            <Card.Text>{address}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
