import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Register.css'; // Assuming you have a CSS file for styling

const Register = () => {
  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  // Handle form submission
  const onSubmit = (values) => {
    console.log('Form data', values);
    // Add your form submission logic here
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
