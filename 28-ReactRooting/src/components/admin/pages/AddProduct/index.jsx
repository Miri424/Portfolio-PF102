import React, { useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { BASE_URL } from "../../../../Services/Base/api";

const AddProduct = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      image: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "You must enter at least 3 characters")
        .max(50, "You cannot enter more than 50 characters")
        .required("Product Name is required"),
      price: Yup.number()
        .min(1, "Price must be at least 1")
        .required("Price is required"),
      description: Yup.string()
        .min(10, "Description must be at least 10 characters")
        .max(200, "Description cannot be more than 200 characters")
        .required("Description is required"),
      image: Yup.string().required("Image URL is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm, setStatus }) => {
      setStatus(null);
      const newProduct = {
        id: nanoid(4),
        name: values.name,
        price: `$${values.price}`,
        description: values.description,
        image: values.image,
      };

      try {
        const response = await axios.post(`${BASE_URL}/products`, newProduct);
        if (response.status === 201) {
          setStatus("Product added successfully!");
          resetForm();
        }
      } catch (error) {
        setStatus("Error adding product!");
      }

      setSubmitting(false);
    },
  });

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="input-group">
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="error">{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>

        <div className="input-group">
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error">{formik.errors.image}</div>
          ) : null}
        </div>

        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
