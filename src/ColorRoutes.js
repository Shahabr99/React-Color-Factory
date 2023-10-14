import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

const ColorRoutes = () => {

  return (
    <Routes>
      <Route path="/colors" element={<Colors />} />
      <Route path="/colors/:name" element={<ColoredPage />} />
      <Route path="/colors/new" element={<ColorForm />} />
      <Route path="/*" element={<Navigate to="/colors" />} />
    </Routes>
  )
}

export default ColorRoutes;