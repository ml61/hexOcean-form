import React from "react";
import Form from "react-bootstrap/Form";

const dishTypes = [null, "Pizza", "Soup", "Sandwich"];

function GeneralFieldsOfForm({ formik }) {
  return (
    <>
      <Form.Group>
        <Form.Label>Dish Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="pizza a-la mahon"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Preparation Time (hh:mm:ss):</Form.Label>
        <Form.Control
          type="time"
          step="1"
          name="preparation_time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.preparation_time}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Dish Type:</Form.Label>
        <Form.Control
          as="select"
          name="type"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.type}
          required
        >
          {dishTypes.map((dishType) => (
            <option key={dishType}>{dishType}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
}

export default GeneralFieldsOfForm;
