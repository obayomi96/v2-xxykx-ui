import React, { useState } from "react";
// import { useQuery } from 'react-query';
import { withRouter, Link } from 'react-router-dom';
import AuthApi from '../../api/auth'

const authApi = new AuthApi();

const { userLogin } = authApi;

const Login = ({ history }) => {
  // const { data, status } = useQuery('login', userLogin);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    event.persist();
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(!loading);
      const { email, password } = values;
      await userLogin({ email, password });
      setLoading(!loading);
      history.push('/comments')
    } catch (error) {
      if (error) {
        setLoading(false);
        throw error
      }
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
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
          </div>
          <div>
            <input
              value={`${loading ? 'Loading...' : "Submit"}`}
              type="submit"
            />
              {/* <input
              value='Submit'
              type="submit"
            /> */}
          </div>
        </form>
      </div>
      <div>
        <p>Dont have an acount? <Link to='/signup'>Sign up</Link> </p>
      </div>
    </div>
  );
};

export default withRouter(Login);
