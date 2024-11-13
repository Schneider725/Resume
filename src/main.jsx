import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GeneralInfo from './components/GeneralInfo'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
  </StrictMode>,
)
