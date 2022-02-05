import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

const CatedralRoutes = () => {
   return (
      <Routes>
         <Route path='ppi' element={<h1>Acapulco PPI</h1>}/>
         <Route path='ppi_gif' element={<h1>Acapulco PPI_GIF</h1>}/>
         <Route path='cmax' element={<h1>Acapulco CMAX</h1>}/>
         <Route path='cmax_gif' element={<h1>Acapulco CMAX_GIF</h1>}/>

         <Route path='*' element={<Navigate to='/acapulco/ppi'/>}/>
      </Routes>
   );
};

export default CatedralRoutes;
