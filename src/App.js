import './App.css';
import './Appmobile.css';
import './nav.css';
import Header from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import Product from './components/Product'
import HighToLow from './components/ProdListH2L';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Low2High from './components/ProdListL2H';

function App() {
  return (
   <>
   <Router >
   <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={< Product/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/l2h" element={<Low2High/>}/>
          <Route path="/products/h2l" element={<HighToLow/>}/>
    </Routes>
  <Footer />
  </Router>
   </>
  );
}

export default App;
