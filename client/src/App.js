import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductView from '../src/pages/ProductView';
import PasswordRest from './pages/PasswordRest.js';
import Register from './pages/Register.js';
import { useEffect }  from 'react';
import axios from 'axios';

function App() {
  return (
    <Router>
      <Header fixed/>
      <main className='py-2' style={{minHeight : "85vh"}}>
        <Container> 
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/products/:id' element={<ProductView/>} />
            <Route path='/password-rest' element={<PasswordRest/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes> 
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
