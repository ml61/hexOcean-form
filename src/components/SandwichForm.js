import React from "react";
import Form from "react-bootstrap/Form";

function SandwichForm({ formik }) {
  return (
    <Form.Group>
      <Form.Label>Slices of Bread:</Form.Label>
      <Form.Control
        type="number"
        min="0"
        step="1"
        name="slices_of_bread"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.slices_of_bread}
        required
      />
    </Form.Group>
  );
}

export default SandwichForm;
