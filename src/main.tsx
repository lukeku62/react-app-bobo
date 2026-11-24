import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import PageCatalog from './components/pages/PageCatalog'
import PageProduct from './components/pages/PageProduct'
import Shell from './components/shell/Shell'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shell />}>
          <Route index element={<PageCatalog />} />
          <Route path='product/:productId' element={<PageProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
