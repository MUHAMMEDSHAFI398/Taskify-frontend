import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './modules/routes/appRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
