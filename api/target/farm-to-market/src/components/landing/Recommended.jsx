import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import fruits from "../../assets/products/fruits.jpg";

const Recommended = () => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Recommended Products</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="card">
                <img
                  className="card-img-top"
                  src={fruits}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-title fw-bold">product name</p>
                  <p className="card-text-f">product description</p>
                  <button className="btn btn-f-primary w-100 text-uppercase">
                    <FontAwesomeIcon icon={faPlusSquare} /> add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
