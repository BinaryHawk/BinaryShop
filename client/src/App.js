import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <>
    <Header/>
    <Container>
      <main className='py-2' style={{height : "85vh"}}> 
        <h1> Welcome to BinaryShop</h1>
        <HomePage/>
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
