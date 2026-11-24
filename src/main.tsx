import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import PageProductDetail from './components/pages/PageProductDetail'
import PageProducts from './components/pages/PageProducts'
import Shell from './components/shell/Shell'
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shell />}>
          <Route index element={<PageProducts />} />
          <Route path='products' element={<PageProducts />} />
          <Route path='products/:productId' element={<PageProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
