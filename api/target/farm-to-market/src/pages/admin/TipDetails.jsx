import {
  faEllipsisVertical,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { tipDetails } from "../../services/tips";

const TipDetails = () => {
  const param = useParams();
  const [tip, setTip] = useState(null);
  useEffect(() => {
    tipDetails(+param.id).then((res) => {
      console.log(res.data.tip);
      setTip(res.data.tip);
    });
  }, [param]);
  if (tip) {
    return (
      <Container className="mb-4 mt-4">
        <Card>
          <Card.Header className="f-card-header">
            <Dropdown>
              <Dropdown.Toggle className="notif-dropdown">
                <FontAwesomeIcon color="#000" icon={faEllipsisVertical} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <FontAwesomeIcon
                    color="#04b250"
                    className="me-3"
                    icon={faTrashAlt}
                  />
                  Delete
                </Dropdown.Item>
                <Dropdown.Item>
                  <FontAwesomeIcon
                    color="#04b250"
                    className="me-3"
                    icon={faPencilAlt}
                  />
                  Update
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={2}>
                <h6>Title</h6>
              </Col>
              <Col lg={10}>
                <p>{tip.title}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
                <h6>Content</h6>
              </Col>
              <Col lg={10}>
                <p>{tip.content}</p>
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
                <h6>Receiver</h6>
              </Col>
              <Col lg={10}>
                <p>
                  {tip.respondent.firstName} {tip.respondent.lastName}
                </p>
              </Col>
            </Row>
            {tip.seen && (
              <Row>
                <Col lg={2}>
                  <h6>Seen Date</h6>
                </Col>
                <Col lg={10}>
                  <p>{tip.seenDate}</p>
                </Col>
              </Row>
            )}
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default TipDetails;
