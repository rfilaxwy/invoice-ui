import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const LineItem = props => {
  let editButton = props.data.edit ? (
    <Button variant="outline-secondary">Edit</Button>
  ) : (
    <Button variant="outline-secondary" disabled>
      No Edit
    </Button>
  );
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder={props.data.name}
          aria-label={props.data.name}
        />
        <InputGroup.Append>{editButton}</InputGroup.Append>
      </InputGroup>
    </div>
  );
};
export default LineItem;
