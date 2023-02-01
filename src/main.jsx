import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CommentsContextProvider } from './context/CommentsContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentsContextProvider>
      <App />
    </CommentsContextProvider>
  </React.StrictMode>,
)
