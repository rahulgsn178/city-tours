import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import './App.scss';
import ToursList from './components/Tours-list';

function App() {
  return (
    <main>
      <Navbar />
      <ToursList />
    </main>
  );
}

export default App;
