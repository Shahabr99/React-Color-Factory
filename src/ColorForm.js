import React from 'react';
import {Link} from 'react-router-dom';


const ColorForm = ({newColor, colors, setColors, setNewColor}) => {

  function changeData(e) {
    setNewColor(e.target.value)
  }
  
  function handleForm(e) {
    e.preventDefault();
    if(newColor.trim() !== '') {
    setColors(prevColors => [...prevColors, newColor])
    setNewColor('')
    }
  }

  return (
    <form onSubmit={handleForm}>
      <input type="text" value={newColor} onChange={changeData} />
      <button type="submit" ><Link to="/colors">Add Color</Link></button>
    </form>
  )
}

export default ColorForm;