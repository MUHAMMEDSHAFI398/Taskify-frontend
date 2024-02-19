import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Signup from 'modules/Signup'
import Login from 'modules/Login'
import LandingPage from 'modules/Landing'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<LandingPage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default AppRoutes;