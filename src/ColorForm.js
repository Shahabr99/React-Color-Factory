import React, { useState } from 'react';

const ColorForm = () => {
  const [color, setColors] = useState([])

  handleForm() {
    
  }

  return (
    <form onSubmit={handleForm}>
      <input type="text" onChange={() => changeData} />
      <input type="text" onChange={() => changeData} />
      <button>Add Color</button>
    </form>
  )
}

export default ColorForm;