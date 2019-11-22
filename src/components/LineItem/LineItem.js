import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

import classes from "./LineItem.module.css";

const LineItem = props => {
  let type = props.data.type === "date" ? "date" : "";

  let [input] = useState("");
  const handleChange = e => {
    input = e.target.value;
  };

  return (
    <InputGroup className={classes.inputBox} type={type}>
      <InputGroup.Append className={classes.label}>
        {props.data.name}:
      </InputGroup.Append>
      <FormControl
        className={classes.inputs}
        type={type}
        placeholder={props.data.name}
        aria-label={props.data.name}
        onChange={e => handleChange(e)}
        onBlur={() => props.update(input, props.data.name)}
      />
    </InputGroup>
  );
};
export default LineItem;
