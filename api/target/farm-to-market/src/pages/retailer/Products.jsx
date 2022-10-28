import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Link className="btn btn-f-primary" to="/product/add">
        <FontAwesomeIcon icon={faPlusSquare} />
        &nbsp;&nbsp;&nbsp;
        <span>Add</span>
      </Link>
    </div>
  );
};

export default Products;
