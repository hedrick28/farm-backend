import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const ProductForm = () => {
  return (
    <Container className="mt-4 mb-4">
      <Form>
        <Card>
          <Card.Header>
            <Card.Title>Add Product</Card.Title>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col lg={6} className="mb-3">
                    <div className="d-flex align-items-start justify-content-center align-items-sm-center gap-4">
                      <img
                        src=""
                        alt="farmer-avatar"
                        className="profilePicture"
                        id="uploadedAvatar"
                        width={"200px"}
                        height={"150px"}
                      />
                    </div>
                  </Col>
                  <Col
                    lg={6}
                    className=" d-flex justify-content-center align-items-center "
                  >
                    <div className="button-wrapper">
                      <div className="d-flex flex-row justify-content-center align-items-center ">
                        <label
                          htmlFor="upload"
                          className="btn input-f-primary"
                          tabIndex="0"
                          typeof="file"
                        >
                          <input
                            type="file"
                            id="upload"
                            accept="image/png, image/jpeg"
                            className="account-file-input input-file-upload"
                          />
                        </label>
                      </div>
                      <p className="text-mute mb-0">
                        Allowed JPG, JPEG or PNG. Max size of 1MB
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mt-4">
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-uppercase fw-bold">
                    Product Name
                  </Form.Label>
                  <Form.Control type="text" size="1x" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-uppercase fw-bold">
                    Product Description
                  </Form.Label>
                  <Form.Control type="text" size="1x" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-uppercase fw-bold">
                    Price
                  </Form.Label>
                  <Form.Control type="text" size="1x" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-uppercase fw-bold">
                    Stock
                  </Form.Label>
                  <Form.Control type="text" size="1x" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-uppercase fw-bold">
                    Unit
                  </Form.Label>
                  <Row>
                    <Col>
                      <Form.Check type="radio" label="Per Gram(s)" size="1x" />
                    </Col>
                    <Col>
                      <Form.Check type="radio" label="Per Kilo" size="1x" />
                    </Col>
                    <Col>
                      <Form.Check type="radio" label="Per Piece" size="1x" />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn-f-primary">Submit</button>
          </Card.Footer>
        </Card>
      </Form>
    </Container>
  );
};

export default ProductForm;
