import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productDetails } from "../../services/product";

const ProductDetails = () => {
  const param = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    productDetails(+param.id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProduct(res.data.data);
      } else if (res.data && res.data.status === 0) {
        //navigate("/products");
      }
    });
  }, [param]);
  if (product) {
    return (
      <Container className="mb-4 mt-4">
        <Card>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <img
                  src={require("../../assets/uploads/" + product.image)}
                  className="w-100"
                />
              </Col>
              <Col lg={6} className="pt-2">
                <div className="">
                  <h5 className="text-uppercase">{product.productName}</h5>
                  <p>{product.description}</p>
                  <p>Price: PHP&nbsp;{product.price}</p>
                  <p>Stock: &nbsp;{product.stock}</p>
                  <p>Unit: &nbsp;{product.unit}</p>
                </div>
                <div></div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default ProductDetails;
