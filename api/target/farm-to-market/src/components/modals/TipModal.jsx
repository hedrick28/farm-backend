import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { tipModal } from "../../redux/actions/tipModal";

const TipModal = ({ content }) => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.tip);
  return (
    <Modal show={isShow}>
      <Modal.Header>
        <Modal.Title>
          <FontAwesomeIcon icon={faLightbulb} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title>{content.title}</Modal.Title>
        <p>{content.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="btn btn-default"
          onClick={() => dispatch(tipModal(false))}
        >
          Cancel
        </button>
        <button className="btn btn-danger">Delete</button>
      </Modal.Footer>
    </Modal>
  );
};

export default TipModal;
