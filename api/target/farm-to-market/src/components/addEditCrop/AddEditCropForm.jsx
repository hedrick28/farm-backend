import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const AddEditCropForm = ({ onSubmit, initialValue }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(
    initialValue || {
      cropName: "",
      cropDescription: "",
      cropPrice: "",
      cropQuantityInStock: "",
      cropUnit: "",
      cropImage: "",
    }
  );

  const schema = Joi.object({
    cropName: Joi.string().required(),
    cropDescription: Joi.string().required(),
    cropPrice: Joi.number().min(0.1).required(),
    cropQuantityInStock: Joi.number().min(0).required(),
    cropUnit: Joi.string().required(),
    cropImage: Joi.string().uri().allow("").optional(),
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });

    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
      .validate(event.currentTarget.value);

    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[event.currentTarget.name];
      setErrors(errors);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
    // navigate("/admin/products");
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    console.log(result);
    return !!result.error;
  };

  return (
    <div className="container m-5 d-flex justify-content-center reg-border">
      <form
        className="row g-2needs-validation"
        onSubmit={handleSubmit}
        method="post"
      >
        <h3 className="d-flex justify-content-center mt-4">
          Detalye ng Pananim na Idadagdag
        </h3>
        <div className="mb-3">
          <label htmlFor="cropName" className="form-label">
            Pangalan ng Pananim
          </label>
          <input
            type="text"
            className="form-control"
            id="cropName"
            name="cropName"
            value={form.cropName}
            onChange={handleChange}
            placeholder="Patatas"
          />
          {errors.cropName && (
            <div className="text-danger">Maglagay ng pangalan ng pananim.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="cropDescription" className="form-label">
            Deskripsyon ng Pananim
          </label>
          <input
            type="text"
            className="form-control"
            id="cropDescription"
            name="cropDescription"
            value={form.cropDescription}
            onChange={handleChange}
            placeholder="Masarap na patatas"
          />
          {errors.cropDescription && (
            <div className="text-danger">
              Maglagay ng deskripsyon ng pananim.
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="cropPrice" className="form-label">
            Presyo ng Pananim
          </label>
          <input
            type="text"
            className="form-control"
            id="cropPrice"
            name="cropPrice"
            value={form.cropPrice}
            onChange={handleChange}
            placeholder="100"
          />
          {errors.cropPrice && (
            <div className="text-danger">Maglagay ng presyo ng pananim.</div>
          )}
        </div>

        <div className="row d-flex">
          <div className="col-auto mb-3">
            <label htmlFor="cropQuantityInStock" className="form-label">
              Dami ng Pananim
            </label>
            <input
              type="text"
              className="form-control"
              id="cropQuantityInStock"
              name="cropQuantityInStock"
              value={form.cropQuantityInStock}
              onChange={handleChange}
              placeholder="10"
            />
            {errors.cropQuantityInStock && (
              <div className="text-danger">Maglagay ng dami ng pananim.</div>
            )}
          </div>
          <div className="col-auto">Yunit ng Pagsukat (Pumili ng isa) : </div>
          <br />
          <div className="form-check col-auto">
            <input
              className="form-check-input"
              type="radio"
              name="cropUnit"
              id="g"
              value="g"
              onChange={handleChange}
            />

            <label className="form-check-label" htmlFor="farmer">
              gramo
            </label>
          </div>
          <div className="form-check col-auto">
            <input
              className="form-check-input"
              type="radio"
              name="cropUnit"
              id="kg"
              value="kg"
              onChange={handleChange}
            />

            <label className="form-check-label" htmlFor="supplier">
              kilogramo
            </label>
          </div>
          <div className="form-check col-auto">
            <input
              className="form-check-input"
              type="radio"
              name="cropUnit"
              id="pcs"
              value="pcs"
              onChange={handleChange}
            />

            <label className="form-check-label" htmlFor="admin">
              piraso
            </label>
          </div>
          {errors.role && <div className="text-danger">Pumili ng isa.</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="cropImage" className="form-label">
            Larawan ng Pananim
          </label>
          <input
            type="text"
            className="form-control"
            id="cropImage"
            name="cropImage"
            value={form.cropImage}
            onChange={handleChange}
          />
          {errors.cropImage && (
            <div className="text-danger">Maglagay ng larawan ng pananim.</div>
          )}
        </div>
        <div className="mb-3 d-flex justify-content-center align-content-center">
          <button
            className="btn btn-f-primary w-50 mt-3 "
            type="submit"
            disabled={isFormInvalid()}
          >
            Isumite
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditCropForm;
