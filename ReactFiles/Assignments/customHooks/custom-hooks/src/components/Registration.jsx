
import React from "react";
import useForm from "./useForm";

const RegisterForm = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering:", values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={values.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={values.password} onChange={handleChange} placeholder="Password" />
      <input name="confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
