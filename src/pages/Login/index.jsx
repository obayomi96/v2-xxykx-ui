import React, { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = values;
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="email"
            type="email"
            name="email"
            value={values.email}
          />
          <input
            onChange={handleChange}
            placeholder="password"
            type="password"
            name="password"
            value={values.password}
          />
          {/* <input
            value={`${isLoading ? "Loading..." : "Submit"}`}
            type="submit"
          /> */}
            <input
            value='Submit'
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
