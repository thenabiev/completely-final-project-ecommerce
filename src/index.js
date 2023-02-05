import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from './components/Navbar';

//Redux
import { store } from './state/store';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <NavbarComponent />
    <App />
    <br />
    <Container >
      <Footer/>
    </Container>
  </BrowserRouter>
  </Provider>
);

