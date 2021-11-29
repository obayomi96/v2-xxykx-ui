import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../utils/helpers';

const ProtectedRoute = ({ history, component: Component, ...rest }) => {
  const checkToken = getToken();
  return (
    <Route
      {...rest}
      render={props =>
        checkToken ? <Component {...props} /> : <Redirect
        to={{
          pathname: "/",
        }}
      />
    }
  />
  );
};

export default ProtectedRoute;
