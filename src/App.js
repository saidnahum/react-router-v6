import './App.css';
import { Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import Composite from './radares/Composite';

import CatedralRoutes from './routes/CatedralRoutes';
import AcapulcoRoutes from './routes/AcapulcoRoutes';
import NotFound from './components/NotFound';

function App() {
	return (
		<div>
			<div className='flex px-20 py-10 justify-between items-center bg-blue-300'>
				<h1 className='text-3xl font-bold'>SaidNDev</h1>
				<nav>
					<ul className='flex items-center space-x-4'>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/catedral/ppi">Catedral PPI</Link></li>
					</ul>
				</nav>
			</div>

			<div className='flex justify-center mt-20'>
				<Routes>
					<Route path='/' element={<Composite/>}/>
					<Route path='/catedral/*' element={<CatedralRoutes/>}/>
					<Route path='/catedral' element={<Navigate to='/'/>}/>

					<Route path='/acapulco/*' element={<AcapulcoRoutes/>}/>
					<Route path='/acapulco' element={<Navigate to='/'/>}/>

					<Route path='*' element={<NotFound/>}/>
				</Routes>
			</div>		
			
		</div>
		
	);
}

export default App;
