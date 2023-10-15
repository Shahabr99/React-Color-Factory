import React from 'react';
import ColorRoutes from './ColorRoutes';
import {BrowserRouter} from 'react-router-dom';


function App() {
 

  return (
    <div>
      <BrowserRouter>
        <ColorRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;
