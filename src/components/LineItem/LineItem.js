import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const LineItem = props => {
  let type = props.data.type == "date" ? "date" : "";

  let editButton = props.data.edit ? (
    <Button variant="outline-secondary">Edit</Button>
  ) : (
    <Button variant="outline-secondary" disabled>
      No Edit
    </Button>
  );
  return (
    <div>
      <InputGroup className="mb-3" type={type}>
        <FormControl
          type={type}
          placeholder={props.data.name}
          aria-label={props.data.name}
        />
        <InputGroup.Append>{editButton}</InputGroup.Append>
      </InputGroup>
    </div>
  );
};
export default LineItem;
