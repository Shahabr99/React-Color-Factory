import React, {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Colors from './Colors';
import ColorForm from './ColorForm';
import ColoredPage from './ColoredPage';

const ColorRoutes = () => {
  const [colors, setColors] = useState([])
  const [color, setColor] = useState('')


  return (
    <Routes>
      <Route path="/colors" element={<Colors colors={colors}/>} />
      <Route path="/colors/:name" element={<ColoredPage colors={colors}/>} />
      <Route path="/colors/new" element={<ColorForm newColor={color} colors={colors} setNewColor={setColor} setColors={setColors} />} />
      <Route path="/*" element={<Navigate to="/colors" />} />
    </Routes>
  )
}

export default ColorRoutes;