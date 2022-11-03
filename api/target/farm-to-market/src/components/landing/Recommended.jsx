import { faPesoSign, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import fruits from "../../assets/products/fruits.jpg";
import { allProducts } from "../../services/product";
import { getUserInfo } from "../../services/userInf";

const Recommended = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    allProducts().then((res) => {
      if (res.data) {
        setProducts(res.data);
      }
    });
  }, []);

  const handleProductDetails = (e, id) => {
    e.preventDefault();
    if (!getUserInfo()) {
      return navigate("/login");
    }

    return navigate(`/details/product/${id}`);
  };
  if (products) {
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Recommended Products</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {products.map((product, idx) => (
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <Link
                    className="product-link"
                    onClick={(e) => handleProductDetails(e, product.product_id)}
                  >
                    <div className="card">
                      <img
                        className="card-img-top product-image"
                        src={require(`../../assets/uploads/${product.image}`)}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <p className="card-title fw-bold">
                          {product.productName}
                        </p>

                        <p className="card-text-f">{product.description}</p>
                        <p className="badge bg-warning">
                          <FontAwesomeIcon size="xs" icon={faPesoSign} />
                          {product.price}
                        </p>
                        <button className="btn btn-f-primary w-100 text-uppercase">
                          <FontAwesomeIcon icon={faPlusSquare} /> add to cart
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Recommended;
