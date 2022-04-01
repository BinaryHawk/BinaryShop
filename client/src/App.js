import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Header/>
    <Container>
      <main main style={{height : "85vh"}}> 
        <h1> welcome to BinaryShop</h1>
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
