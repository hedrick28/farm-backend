import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
//import path from "../../assets/uploads/";
import { productDetails } from "../../services/product";

const Details = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    productDetails(+param.id).then((res) => {
      console.log(res.data.data);
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
                  <p>Price: PHP&nbsp;{product.price}</p>
                  <p>Stock: &nbsp;{product.stock}</p>
                  <p>Unit: &nbsp;{product.unit}</p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default Details;
