import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Store from './pages/Store'
import Success from './pages/Success'
import Cancel from './pages/Cancel'
import CartProvider from './CartContext'

function App() {

  return (
    <CartProvider>
      <Container>
        <NavBar />
        <Routes>
          <Route path='/store' element={<Store />}/>
          <Route path="/success" element={<Success />}/>
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
