import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainContent from './components/layout/MainContent'

createRoot(document.getElementById('root')).render(
  // IMPORTED MAINCONTENT COMPONENT TO RENDER INSTEAD OF APP COMPONENT
  <StrictMode>
    <MainContent />
  </StrictMode>,
)
