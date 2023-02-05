// Router
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';

// Pages
import About from './pages/About';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import Shop from './pages/Shop';

// Redux


// Bootstrap

function App() {

  return (
    <Container className='App '>
      <Routes>
        <Route path='/' element={<Shop />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/details/:itemId' element={<Details />}/>
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      

    </Container>
  );
}

export default App;
