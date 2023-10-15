import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Colors = ({colors}) => {

  return (
    <div>
      <div>
        <h2>Add a color to the list</h2>
        <NavLink to="/colors/new">Add Color</NavLink>
      </div>
      <ul>
        {colors.map((color, i) => (
        <li key={i}><Link to={`/colors/${color}`}>{color}</Link></li>
        ))}
      </ul> 
    </div>
  )
}

export default Colors;