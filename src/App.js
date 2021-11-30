import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query-devtools';
import ProtectedRoute from './HOC/ProtectedRoute';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Comments from './pages/Comments'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <ProtectedRoute exact path='/comments' component={Comments} />
        </Switch>
      </Router>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
