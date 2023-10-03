import './App.css'
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
      </Routes>
    </BrowserRouter>
  )
}


export default App;