import React, { Component } from "react";

import { Card } from "react-bootstrap";
import classes from "./CompanyHeader.module.css";

export default class CompanyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "Major League Company Ltd.",
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
    let address = (
      <div className={classes.address}>
        <p>{co.address}</p>
        <p>
          {co.city}, {co.province}
        </p>
        <p>{co.postalCode}</p>
        <p>Contact: {co.email}</p>
      </div>
    );

    return (
      <div>
        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header className={classes.companyName}>
            {co.companyName}
          </Card.Header>
          <Card.Body>
            <Card.Title>Invoice</Card.Title>
            {address}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
