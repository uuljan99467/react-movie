import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GenreContext from './context/GenerContext.jsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import './i18n.js'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GenreContext>
        <App />
      </GenreContext>
    </QueryClientProvider>
  </StrictMode>,
)
