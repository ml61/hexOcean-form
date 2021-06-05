import React, { useState } from "react";
import axios from "axios";

import { useFormik } from "formik";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import {
  formatDishObject,
  handleServerError,
} from "../helpers/helperFunctions";
import { POST_URL } from "../api/urls";

import GeneralFieldsOfForm from "../components/GeneralFieldsOfForm";
import PizzaForm from "../components/PizzaForm";
import SandwichForm from "../components/SandwichForm";
import SoupForm from "../components/SoupForm";

function FinalForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successPost, setSuccessPost] = useState(false);
  const [error, setError] = useState(null);

  const postDish = async (dishObj) => {
    setIsLoading(true);
    try {
      const res = await axios.post(POST_URL, dishObj);
      const { data } = res;

      setIsLoading(false);
      setSuccessPost(true);
      setError(null);
      setTimeout(() => setSuccessPost(false), 3000);
      formik.resetForm();
    } catch (error) {
      const errMessage = handleServerError(error.response.data);
      setError(errMessage);
      setSuccessPost(false);
      setTimeout(() => {
        setError(null);
      }, 5000);

      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      preparation_time: "00:00:00",
      type: "",
      no_of_slices: "", //only for pizza
      diameter: "", //only for pizza
      spiciness_scale: "", //only for soup
      slices_of_bread: "", //only for sandwich
    },
    onSubmit: (values) => {
      const dishObj = formatDishObject(values);
      postDish(dishObj);
    },
  });

  return (
    <div className="container">
      {successPost ? (
        <Alert variant="success">
          Your dish was successfully added to our database!
        </Alert>
      ) : null}
      {error ? <Alert variant="danger">Unfortunately...{error}</Alert> : null}
      <Form onSubmit={formik.handleSubmit}>
        <GeneralFieldsOfForm formik={formik} />
        {formik.values.type === "Pizza" && <PizzaForm formik={formik} />}
        {formik.values.type === "Soup" && <SoupForm formik={formik} />}
        {formik.values.type === "Sandwich" && <SandwichForm formik={formik} />}
        <Button
          type="submit"
          style={{ width: "100%" }}
          disabled={isLoading || successPost || error}
        >
          Submit Dish
        </Button>
      </Form>
    </div>
  );
}

export default FinalForm;
