import './App.css';
import { Body } from './layout/layoutElements';
import BrochureList from './brochure/BrochureList'
import Container from 'react-bootstrap/Container'
import Hero from './hero/Hero';
import Footer from './footer/Footer'
import {Helmet} from "react-helmet";


function App() {
  return (
      <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Sanhar Insurance</title>
            <link rel="icon" href="./images/icon.svg" />
        </Helmet>
        <Container className="mt-5">
          <Hero />
          <BrochureList />
          <Footer />
        </Container>
      </>
      
  );
}

export default App;