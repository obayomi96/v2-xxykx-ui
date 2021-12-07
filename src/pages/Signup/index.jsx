import React, { useState } from 'react';
import { withRouter, Link} from 'react-router-dom';
import AuthApi from '../../api/auth'

const authApi = new AuthApi();

const { userSignup } = authApi;

const Signup = ({history}) => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    event.persist()
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(!loading);
      const { name, email, password } = values;
      await userSignup({ name, email, password });
      setLoading(!loading);
      history.push('/comments')
    } catch (error) {
      if (error) {
        setLoading(false);
        throw error
      }
    }
  }

  return (
    <div>
      <h1>Signup page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              onChange={handleChange}
              placeholder="name"
              type="name"
              name="name"
              value={values.name}
            />
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
        <p>Already have an acount? <Link to='/'>Login</Link> </p>
      </div>
    </div>
  );
}

export default withRouter(Signup);
