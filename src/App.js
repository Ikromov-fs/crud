import React from 'react'
import Register from './pages/register/register'
import Login from './pages/login/login'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/main'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
