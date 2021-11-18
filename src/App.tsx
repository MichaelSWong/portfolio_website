import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from 'About';
import Home from 'Home';
import Navbar from 'components/Layout/Navbar';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<h1>Welcome to React Router!</h1>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
			</Routes>
		</div>
	);
};

export default App;
