import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Route from './Routing'
import App from './App.jsx'
import Ruf from '@/Ruf'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    {/* <App /> */}
    {/* <Login/> */}
    {/* <Ruf/> */}
    <Route/>
    {/* </BrowserRouter> */}
  </StrictMode>
)
