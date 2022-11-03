import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
//import path from "../../assets/uploads/";
import { productDetails } from "../../services/product";

const Details = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    productDetails(+param.id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProduct(res.data.data);
      } else if (res.data && res.data.status === 0) {
        navigate("/products");
      }
    });
  }, []);
  if (product) {
    return (
      <div className="container mb-4 mt-4">
        <Card>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <img
                  src={require("../../assets/uploads/" + product.image)}
                  className="w-100"
                />
              </Col>
              <Col lg={6}>
                <div className="">
                  <h5 className="text-uppercase">{product.productName}</h5>

                  <p>{product.description}</p>
                  <p>
                    Category: &nbsp;{product.category ? product.category : ""}
                  </p>
                  <p>Price: PHP&nbsp;{product.price}</p>
                  <p>Stock: &nbsp;{product.stock}</p>
                  <p>Unit: &nbsp;{product.unit}</p>
                  <p>
                    Shipping Fee: &nbsp;
                    {product.shippingFee ? product.shippingFee : ""}
                  </p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row className="mb-2 mt-2">
          <Col lg={2} md={3} sm={4} xs={6} className="mb-2">
            <Card>
              <Card.Body className="text-center">
                <h5>SOLD</h5>
                <h6>{product.sold}</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="mb-2">
            <Card>
              <Card.Body className="text-center">
                <h5>ORDERS</h5>
                <h6>0</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="mb-2">
            <Card>
              <Card.Body className="text-center">
                <h5>DELIEVERED</h5>
                <h6>0</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="mb-2">
            <Card>
              <Card.Body className="text-center">
                <h5>RETURNED</h5>
                <h6>0</h6>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2} md={3} sm={4} xs={6} className="mb-2">
            <Card>
              <Card.Body className="text-center">
                <h5>CANCEL</h5>
                <h6>0</h6>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Card>
              <Card.Body>
                <h5>Comments</h5>
                <hr />
                <div>
                  <Link>
                    <h5>Jovanie</h5>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
};

export default Details;
