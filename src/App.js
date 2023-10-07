import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './server'
import VanDetail from './pages/VanDetail';

function App() {

  return (
    <BrowserRouter>
      <div className='flex justify-between p-8'>
        <Link to="/">#VANLIFE</Link>
        <div className='flex gap-20'>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
  
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vans' element={<Vans />}/>
        <Route path='/vans/:id' element={<VanDetail />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;