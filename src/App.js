import './App.css';
import { Body } from './layout/layoutElements';
import BrochureList from './brochure/BrochureList'
import Filter from './filter/Filter';
import Container from 'react-bootstrap/Container'
import Hero from './hero/Hero';
import Footer from './footer/Footer'


function App() {
  return (
      
        <Container className="mt-5">
          <Hero />
          <BrochureList />
          <Footer />
        </Container>
      
  );
}

export default App;