import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import "./index.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import PageCatalog from './components/PageCatalog'
import PageCatalogMan from './components/PageCatalogMan'
import PageCatalogShoes from './components/PageCatalogShoes'
import PageCatalogJeans from './components/PagecatalogJeans'
import PageCatalogWoman from './components/PageCatalogWoman'
import ProductDetail from './components/ProductDetail'
import ManShell from './components/ManShell'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='catalog' element={<PageCatalog />} />

        <Route path='man' element={<ManShell />} >
          <Route index element={<PageCatalogMan />} />
          <Route path='shoes' element={<PageCatalogShoes />} />
          <Route path='jeans' element={<PageCatalogJeans />} />
          <Route path='product-detail/:id' element={<ProductDetail />} />
        </Route>
        <Route path='woman'>
          <Route index element={<PageCatalogWoman />} />
          <Route path='shoes' element={<PageCatalogShoes />} />
          <Route path='jeans' element={<PageCatalogJeans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
