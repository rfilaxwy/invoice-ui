import React from "react";

import { Button, Modal } from "react-bootstrap";

const PopUp = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Invoice Line Description
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input>
          <textarea placeHolder="Add description here."></textarea>
        </input>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default PopUp;
