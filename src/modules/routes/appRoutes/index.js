import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Signup from 'modules/Signup'
import Login from 'modules/Login'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default AppRoutes;