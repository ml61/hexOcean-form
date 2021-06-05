import React from "react";
import Form from "react-bootstrap/Form";

function SoupForm({ formik }) {
  return (
    <Form.Group>
      <Form.Label>Spiciness Scale (1-10):</Form.Label>
      <Form.Control
        type="number"
        min="1"
        max="10"
        step="1"
        name="spiciness_scale"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.spiciness_scale}
        required
      />
    </Form.Group>
  );
}

export default SoupForm;
