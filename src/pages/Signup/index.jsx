import React, { useState } from 'react';

const Signup = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    event.persist()
    setValues(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, email, password } = values;
  }

  return (
    <div>
      <h1>Signup page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder="name" type="text" name="name" autoComplete={false} />
          <input onChange={handleChange} placeholder="email" type="email" name="email" autoComplete={false} />
          <input onChange={handleChange} placeholder="password" type="password" name="password" />
          {/* <input value={`${isLoading ? 'Loading...' : 'Submit'}`}type="submit" /> */}
          <input value='Submit' type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
