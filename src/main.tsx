import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import PageCatalog from './components/PageCatalog'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/catalog' element={<PageCatalog />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
