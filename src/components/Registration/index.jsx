/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
import React from "react";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import { Formik } from "formik";
import * as yup from "yup";

import { registrationRequested } from "../../store/actions/auth";

import "../../styles/modal-window.css";
import "../../styles/header.css";

export const Registration = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validationsSchema = yup.object().shape({
    name: yup.string().required("Required field"),
    surname: yup.string().required("Required field"),
    email: yup.string().required("Required field"),
    login: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
  });

  return (
    <div>
      <Button
        className="header__registration"
        onClick={handleOpen}
        data-testid="registration-open-button-element"
      >
        Registration
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className="modal-window">
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              login: "",
              password: "",
            }}
            onSubmit={(values) => dispatch(registrationRequested(values))}
            validateOnBlur
            validationSchema={validationsSchema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
              dirty,
            }) => (
              <div>
                <div className="title"> Name </div>
                <input
                  className="name-area"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  data-testid="name-input-element"
                />
                {touched.name && errors.name}
                <div className="title"> Surname </div>
                <input
                  className="surname-area"
                  type="text"
                  name="surname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                  data-testid="surname-input-element"
                />
                {touched.surname && errors.surname}
                <div className="title"> Login </div>
                <input
                  className="login-area"
                  type="text"
                  name="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  data-testid="login-input-element"
                />
                {touched.login && errors.login}
                <div className="title"> Email </div>
                <input
                  className="email-area"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  data-testid="email-input-element"
                />
                {touched.email && errors.email}
                <div className="title"> Password </div>
                <input
                  className="password-area"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  data-testid="password-input-element"
                />
                {touched.password && errors.password}
                <button
                  disabled={!isValid || !dirty}
                  type="submit"
                  className="login-button"
                  onClick={handleSubmit}
                  data-testid="registration-button-element"
                >
                  Registration
                </button>
              </div>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};
