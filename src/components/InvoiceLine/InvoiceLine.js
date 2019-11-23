import React, { Component } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup
} from "react-bootstrap";
import classes from "./InvoiceLine.module.css";

var drop = {
  width: "80px !important"
};

export default class InvoiceLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cost: "",
      units: "",
      unitName: "Dropdown",
      outPutLine: "",
      unitChoice: ["each", "lbs", "kg", "hr"]
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
    let newTotal = (parseFloat(cost) * parseFloat(units)).toFixed(2);
    this.props.addLine(name, cost, units, newTotal);
  };
  unitSelect = unit => {
    this.setState({ unitName: unit });
  };
  render() {
    let dropUnits = this.state.unitChoice.map(unit => {
      return (
        <Dropdown.Item
          style={drop}
          key={unit}
          onSelect={() => {
            this.unitSelect(unit);
          }}
          href="#"
        >
          {unit}
        </Dropdown.Item>
      );
    });
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
          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title={this.state.unitName}
            id="input-group-dropdown-2"
          >
            {dropUnits}
          </DropdownButton>
          <InputGroup.Append>
            <Button
              onClick={() => {
                this.totalLine();
              }}
              variant="outline-secondary"
            >
              Add Description
            </Button>
          </InputGroup.Append>
          <InputGroup.Append>
            <Button
              onClick={() => {
                this.totalLine();
              }}
              variant="outline-secondary"
            >
              Add Line
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}
