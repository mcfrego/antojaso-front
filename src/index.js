import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { LocationProvider } from './context/location-context'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocationProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
