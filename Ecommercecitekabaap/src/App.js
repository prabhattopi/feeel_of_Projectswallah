
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home';
import { About } from './components/About';
import { Product } from './components/Product';
import { Contact } from './components/Contact';

function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='' element={<Home/>}/>
    <Route path="/products" element={<Product/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

  </Routes>
  <Footer/>
  
  </>
  );
}

export default App;
