import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken } from '../../utils/helpers';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        getToken() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
