import './App.css';
import Header from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Contact from './components/Contact'
import Product from './components/Product'
import ProdList2 from './components/ProdListL2H';
import HighToLow from './components/ProdListH2L';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <>
   <Router >
   <Header />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/l2h" element={<ProdList2/>}/>
          <Route path="/products/h2l" element={<HighToLow/>}/>
    </Routes>
  <Footer />
  </Router>
   </>
  );
}

export default App;
