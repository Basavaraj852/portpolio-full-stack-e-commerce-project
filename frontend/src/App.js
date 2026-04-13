import React from 'react';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <img src="/images/banner.jpg" alt="banner" width="100%" />
      <ProductList />
    </div>
  );
}

export default App;
