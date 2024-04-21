import { Route, Routes, Navigate } from 'react-router-dom';

import { DetailsAdmin } from '../pages/DetailsAdmin';
import { HomeAdmin } from '../pages/HomeAdmin';
import { New } from '../pages/New';
import { Edit } from '../pages/Edit'

export function AdminRoutes(){

  return(
    <Routes>
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/" element={<Edit />} />
      <Route path="/plates/:id" element={<DetailsAdmin />} />

      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )
}