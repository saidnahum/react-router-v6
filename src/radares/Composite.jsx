import React from 'react';
import { Outlet } from 'react-router-dom';

const Composite = () => {
   return (
      <div>
         <h1 className='text-2xl font-bold'>Composite</h1>
         <Outlet/>
      </div>
   );
};

export default Composite;
