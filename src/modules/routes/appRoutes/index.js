import { Routes, Route } from 'react-router-dom'

import React from 'react'
import Signup from 'modules/Signup'
import Login from 'modules/Login'
import LandingPage from 'modules/Landing'
import Dashboard from 'modules/Taskify/Dashbord'
import EmailVerification from 'modules/EmailVerification'
import EmailVerificationLoader from 'modules/EmailVerification/loader'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='verification' element={<EmailVerification />} />
      <Route path='/auth/:userId/verify/:link' element={<EmailVerificationLoader />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default AppRoutes;