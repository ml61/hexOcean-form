import React from "react";
import Form from "react-bootstrap/Form";

function PizzaForm({ formik }) {
  return (
    <>
      <Form.Group>
        <Form.Label>Number of Slices:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          step="1"
          name="no_of_slices"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.no_of_slices}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Diameter (cm):</Form.Label>
        <Form.Control
          type="number"
          min="0.01"
          step="0.01"
          name="diameter"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.diameter}
          required
        />
      </Form.Group>
    </>
  );
}

export default PizzaForm;
