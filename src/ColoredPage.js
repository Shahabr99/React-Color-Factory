import React from 'react';


const ColoredPage = ({colors}) => {


  return (
    <>
    {
      colors.map((color, i) => (
        <div style={{backgroundColor:color}} key={i}>
          <h1>{color}</h1>
        </div>
      ))
    }
    </>
  );
}

export default ColoredPage;