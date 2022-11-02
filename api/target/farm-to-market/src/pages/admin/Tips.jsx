import {
  faEye,
  faPencil,
  faPlusSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getOwnerTips } from "../../services/tips";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const Tips = () => {
  const [tips, setTips] = useState(null);

  useEffect(() => {
    getOwnerTips().then((res) => {
      if (res.data && res.data.status === 1) {
        setTips(res.data.tips);
      }
    });
  }, []);
  const columns = [
    { dataField: "tip_id", text: "Tip ID", hidden: true },
    { dataField: "title", text: "Title", sort: true },
    { dataField: "content", text: "Content", sort: true },
    { dataField: "seen", text: "Status", sort: true },
    { dataField: "respondent.firstName ", text: "Respondent", sort: true },
    {
      dataField: "link",
      text: "Actions",
      formatter: (rowContent, row) => {
        return (
          <div className="d-flex">
            <Link
              className="btn btn-info me-2"
              to={`/tip/details/${row.tip_id}`}
            >
              <FontAwesomeIcon icon={faEye} />
            </Link>
            <Link
              className="btn btn-f-primary me-2"
              to={`/tip/edit/${row.tip_id}`}
            >
              <FontAwesomeIcon icon={faPencil} />
            </Link>
            <button className="btn btn-danger me-2">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        );
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "title",
      order: "desc",
    },
  ];

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
  if (tips) {
    return (
      <div className="container mb-4 mt-4">
        <Row>
          <Col lg={2}>
            <Link className="btn btn-f-primary w-100" to="/create/tip">
              <FontAwesomeIcon icon={faPlusSquare} />
              &nbsp;&nbsp;&nbsp;
              <span>Create Tip</span>
            </Link>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <BootstrapTable
              striped
              hover
              caption="All Tips"
              bootstrap4
              keyField="tip_id"
              data={tips}
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

export default Tips;
