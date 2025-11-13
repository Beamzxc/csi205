import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

//my stylesheet
import './index.css'

//react component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
