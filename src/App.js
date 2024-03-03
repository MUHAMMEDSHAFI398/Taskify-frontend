import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AppRoutes = lazy(() => import('./modules/routes/appRoutes'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App