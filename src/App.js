import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
        comment app with react-query and tailwind
        </header>
      </div>
     </QueryClientProvider>
  );
}

export default App;
