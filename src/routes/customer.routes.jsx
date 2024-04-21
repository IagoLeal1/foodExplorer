import { Route, Routes, Navigate } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';

export function CustomerRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/" element={<Details />} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}