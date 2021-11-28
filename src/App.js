import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Comments from './pages/Comments'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact element={<Comments/>} path='/comments' />
          <Route  exact path='/signup' element={<Signup/>} />
          {/* <Route component={Error404} path='/*' /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
