import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import { CustomContextProvider } from './context/CustomContextProvider'
import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CustomContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CustomContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
