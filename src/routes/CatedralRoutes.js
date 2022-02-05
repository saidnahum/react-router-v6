import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

const CatedralRoutes = () => {
   return (
      <Routes>
         <Route path='ppi' element={<h1>Catedral PPI</h1>}/>
         <Route path='ppi_gif' element={<h1>Catedral PPI_GIF</h1>}/>
         <Route path='cmax' element={<h1>Catedral CMAX</h1>}/>
         <Route path='cmax_gif' element={<h1>Catedral CMAX_GIF</h1>}/>

         <Route path='*' element={<Navigate to='/catedral/ppi'/>}/>
      </Routes>
   );
};

export default CatedralRoutes;
