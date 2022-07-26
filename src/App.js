import React from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Payement from './components/Payement';
import Paymentdetails from './components/Paymentdetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Payement/>
      <Paymentdetails/>
    </div>
  );
}

export default App;
