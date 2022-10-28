import React, { useEffect, useState } from "react";
import {
  faEye,
  faPencil,
  faPlusSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
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
    { dataField: "product_id", text: "Product ID", hidden: true },
    { dataField: "productName", text: "Product Name", sort: true },
    { dataField: "description", text: "Description", sort: true },
    { dataField: "price", text: "Price", sort: true },
    { dataField: "stock", text: "Stock", sort: true },
    { dataField: "unit", text: "unit", sort: true },
    {
      dataField: "link",
      text: "ACTION",
      formatter: (rowContent, row) => {
        return (
          <div className="d-flex">
            <Link className="btn btn-info me-2">
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <Link className="btn btn-f-primary me-2">
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <button
              className="btn btn-danger me-2"
              onClick={() => handleDelete(row)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        );
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "productName",
      order: "desc",
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log(e, row, "hey");
      console.log(`clicked on row with index: ${rowIndex}`);
    },
    onMouseEnter: (e, row, rowIndex) => {
      console.log(`enter on row with index: ${rowIndex}`);
    },
  };

  const handleDelete = (data) => {
    console.log(data);
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
              striped
              hover
              caption="All Products"
              bootstrap4
              keyField="product_id"
              data={products}
              columns={columns}
              defaultSorted={defaultSorted}
              // rowEvents={rowEvents}
              pagination={pagination}
            ></BootstrapTable>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default Products;
