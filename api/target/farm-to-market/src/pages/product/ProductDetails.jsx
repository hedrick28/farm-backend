import {
  faCartPlus,
  faMinus,
  faMoneyBill1Wave,
  faPesoSign,
  faPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../services/cart";
import { productDetails } from "../../services/product";
import { getUserInfo } from "../../services/userInf";

const ProductDetails = () => {
  const userInfo = getUserInfo();
  const param = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  useEffect(() => {
    productDetails(+param.id).then((res) => {
      if (res.data && res.data.status === 1) {
        setProduct(res.data.data);
      }
    });
  }, [param]);
  const handleQuantityPlus = () => {
    if (qty === product.stock) {
      return setQty(product.stock);
    }
    return setQty(qty + 1);
  };
  const handleQuantityMinus = () => {
    if (qty < 1 || qty === 1) {
      return setQty(1);
    }
    return setQty(qty - 1);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.currentTarget.value > product.stock) {
      return setQty(product.stock);
    } else if (e.currentTarget.value === "") {
      return setQty(1);
    }
    setQty(e.currentTarget.value);
  };

  const handleAddToCart = () => {
    const cartData = {
      quantity: qty,
      product,
      buyer: getUserInfo().data,
      seller: product.owner,
      total: qty * product.price,
    };

    addToCart(cartData).then((res) => {
      if (res.data && res.data.status === 1) {
        toast.success(res.data.message);
      } else {
        alert("An unexpected error occurred");
      }
    });
  };
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
                  {/* <h5 className="text-uppercase">{product.productName}</h5> */}
                  <p>{product.description}</p>
                  <h2 className="default-bg p-4">
                    <span className="text-danger">
                      <FontAwesomeIcon icon={faPesoSign} />
                      {product.price}
                    </span>
                  </h2>

                  <Row className="mb-3">
                    <Col sm={3}>Pieces Available</Col>
                    <Col sm={9}>{product.stock}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={3}>Unit</Col>
                    <Col sm={9}>{product.unit}</Col>
                  </Row>
                  <Row className="mb-3">
                    <Col sm={3}>Shipping Fee</Col>
                    <Col sm={9}>PHP{product.shippingFee}</Col>
                  </Row>

                  {userInfo && userInfo.data.address.length > 0 ? (
                    <Row className="mb-3">
                      <Col sm={3}>Shipping To</Col>
                      <Col sm={9}>
                        <FontAwesomeIcon icon={faTruck} /> &nbsp;#
                        {userInfo.data.address[0].houseNo}{" "}
                        {userInfo.data.address[0].street}{" "}
                        {userInfo.data.address[0].barangay}{" "}
                        {userInfo.data.address[0].city}
                        {" city "}
                        {userInfo.data.address[0].province}
                      </Col>
                    </Row>
                  ) : (
                    ""
                  )}
                </div>
                <div className="default-bg d-flex justify-content-center p-2">
                  <div>
                    <p className="text-center">Quantity</p>
                    <div className="d-flex justify-content-center">
                      <button
                        className="q-counter-btn"
                        onClick={handleQuantityMinus}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                      <input
                        className="q-counter"
                        value={qty}
                        onChange={handleOnChange}
                      />
                      <button
                        className="q-counter-btn"
                        onClick={handleQuantityPlus}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                </div>
                <Row className="mt-2 mb-2">
                  <Col lg={6} className="mb-3">
                    <button
                      className="btn btn-warning w-100"
                      onClick={handleAddToCart}
                    >
                      <FontAwesomeIcon icon={faCartPlus} className="me-2" />
                      <span>Add To Cart</span>
                    </button>
                  </Col>
                  <Col lg={6} className="mb-3">
                    <button className="btn btn-f-primary w-100">
                      <FontAwesomeIcon
                        icon={faMoneyBill1Wave}
                        className="me-2"
                      />
                      <span>Buy Now</span>
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default ProductDetails;
