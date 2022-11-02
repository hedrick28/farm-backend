import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="container mb-4 mt-4">
      <Row>
        <Col lg={2}>
          <Link className="btn btn-f-primary w-100" to="/create/tip">
            <FontAwesomeIcon icon={faPlusSquare} />
            &nbsp;&nbsp;&nbsp;
            <span>Create Tip</span>
          </Link>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tips;
