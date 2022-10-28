import React, { useEffect, useState } from "react";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { myProducts } from "../../services/product";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    myProducts().then((res) => {
      if (res) {
        setProducts(res.data);
      }
    });
  }, []);

  const columns = [
    { dataField: "product_id", text: "Product ID" },
    { dataField: "productName", text: "Product Name", sort: true },
    { dataField: "description", text: "Description", sort: true },
    { dataField: "price", text: "Price", sort: true },
    { dataField: "stock", text: "Stock", sort: true },
    { dataField: "unit", text: "unit", sort: true },
  ];

  const defaultSorted = [
    {
      dataField: "productName",
      order: "desc",
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(`clicked on row with index: ${rowIndex}`);
    },
    onMouseEnter: (e, row, rowIndex) => {
      console.log(`enter on row with index: ${rowIndex}`);
    },
  };

  const pagination = paginationFactory({
    sizePerPage: 5,
    lastPageText: "Last",
    firstPageText: "First",
    nextPageText: "Prev",
    prePageText: "Next",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  if (products) {
    return (
      <div className="container mt-4 mb-4">
        <Link className="btn btn-f-primary" to="/product/add">
          <FontAwesomeIcon icon={faPlusSquare} />
          &nbsp;&nbsp;&nbsp;
          <span>Add</span>
        </Link>
        <Card>
          <Card.Body>
            <BootstrapTable
              caption="All Products"
              bootstrap4
              keyField="product_id"
              data={products}
              columns={columns}
              defaultSorted={defaultSorted}
              rowEvents={rowEvents}
              pagination={pagination}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default Products;
