import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Signup from 'modules/Signup'
import Login from 'modules/Login'
import LandingPage from 'modules/Landing'
import Dashboard from 'modules/Taskify/Dashbord'
import EmailVarification from 'modules/EmailVerification'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='verification' element={<EmailVarification />} />
      <Route path='/auth/:id/verify/:link' element={<Dashboard />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes;