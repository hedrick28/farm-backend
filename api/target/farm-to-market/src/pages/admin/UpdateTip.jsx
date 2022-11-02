import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TipForm from "../../components/admin/TipForm";
import { addTip } from "../../redux/actions/tip";
import { tipDetails } from "../../services/tips";

const UpdateTip = () => {
  const [tip, setTip] = useState(null);
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    tipDetails(+param.id).then((res) => {
      if (res.data && res.data.status === 1) {
        setTip(res.data.tip);
        console.log(res.data.tip);
      }
    });
  }, [param]);

  if (tip) {
    const { title, content, respondent, tip_id, owner } = tip;

    const handleSubmit = (data) => {
      var tipData = { ...data, owner, tip_id };
      dispatch(addTip(tipData));
    };
    return (
      <Container className="mb-4 mt-4">
        <TipForm
          initialValue={{ title, content, respondent }}
          onSubmit={handleSubmit}
        />
      </Container>
    );
  }
};

export default UpdateTip;
