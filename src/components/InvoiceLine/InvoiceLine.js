import React, { Component } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

export default class InvoiceLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cost: "",
      units: "",
      outPutLine: ""
    };
  }
  handleChange = (e, item) => {
    let val = e.target.value;
    switch (item) {
      case "name":
        this.setState({ name: val });
        break;
      case "cost":
        if (!isNaN(val)) {
          this.setState({ cost: val });
          break;
        } else {
          alert("Enter a number in cost");
          this.setState({ cost: "" });
          break;
        }
      case "units":
        if (!isNaN(val)) {
          this.setState({ units: val });
          break;
        } else {
          alert("Enter a number in units");
          this.setState({ units: "" });
          break;
        }
      default:
        console.log("Function being called in worong spot.");
    }
  };
  totalLine = () => {
    let { name, cost, units } = this.state;
    let newTotal = parseFloat(cost) * parseFloat(units);
    this.props.addLine(name, cost, units, newTotal);
  };
  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Line item</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="name"
            onChange={e => {
              this.handleChange(e, "name");
            }}
          />
          <FormControl
            placeholder="Cost/unit"
            onChange={e => {
              this.handleChange(e, "cost");
            }}
          />
          <FormControl
            placeholder="units"
            onChange={e => {
              this.handleChange(e, "units");
            }}
          />
          <InputGroup.Append>
            <Button
              onClick={() => {
                this.totalLine();
              }}
              variant="outline-secondary"
            >
              Button
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
