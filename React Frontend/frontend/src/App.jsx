import { useState } from 'react'
import './Register/UserRegisterForm.jsx'
import UserRegisterForm from './Register/UserRegisterForm.jsx'
import Homepage from './Homepage/Homepage.jsx'
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}/>
          <Route path="/login"/>
          <Route path="/user-register" element={<UserRegisterForm />}/>
        </Routes>
      </BrowserRouter>
  )
}



export default App
