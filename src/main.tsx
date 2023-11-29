import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DropdownProvider } from './components/Dropdown.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DropdownProvider>
      <App />
    </DropdownProvider>
  </React.StrictMode>,
)
