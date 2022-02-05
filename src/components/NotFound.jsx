import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <span>Radar no encontrado... <Link to='/'>Regresar al inicio</Link></span>
   );
};

export default NotFound;
