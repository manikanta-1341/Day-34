import "./App.css";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
export default function CreateBook() {
  const nav = useNavigate();
  const location = useLocation();
  const [render, setRender] = useState(false);
  let state = {
    name: "",
    author: "",
    subject: "",
  };

  const validation = (values) => {
    let error = {};
    if (values.name === "") {
      error.name = "Name is required";
    }
    if (values.author === "") {
      error.author = "Author is required";
    }
    if (values.subject === "") {
      error.subject = "Subject is required";
    }
    return error;
  };

  const submit = async (data, onSubmitProps) => {
    onSubmitProps.resetForm();
    let api = await axios.post(
      "https://62136dcaf43692c9c6044e88.mockapi.io/books",
      {
        name: data.name,
        author: data.author,
        subject: data.subject,
      }
    );
    nav("/books");
  };
  return (
    <>
      <div className="create_container">
        <div className="header">
          <h2>Create Book</h2>
        </div>
        <hr className="divider"/>
        <div className="body">
          <Formik
            initialValues={state}
            validate={(values) => validation(values)}
            onSubmit={(data, onSubmitProps) => submit(data, onSubmitProps)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <label>Name::</label>&nbsp;
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Book Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span>{touched.name && errors.name}</span>
                <br />
                <br />
                <label>Author::</label>&nbsp;
                <input
                  type="text"
                  name="author"
                  value={values.author}
                  placeholder="Author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span>{touched.author && errors.author}</span>
                <br />
                <br />
                <label>Subject::</label>&nbsp;
                <input
                  type="text"
                  name="subject"
                  value={values.subject}
                  placeholder="Subject"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span>{touched.subject && errors.subject}</span>
                <br />
                <br />
                <div className="btns">
                  <input type="submit" className="submit" />
                  <button
                    type="button"
                    className="back_btn"
                    onClick={() => nav("/")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
