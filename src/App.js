import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login';


function App() {
  return (
    
    <BrowserRouter>
    <div>
      <Nav/>
      <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/buyer' element={<Buyer/>}/>
      <Route path = '/seller' element={<Seller/>}/>
      <Route path = '/Login' element={<Login/>}/>
      <Route path = '/Register' element={<Register/>}/>
      
      
      </Routes>
      
      <Footer/>
    </div>
    </BrowserRouter>
    
    
    
    
    
  );
}

export default App;
