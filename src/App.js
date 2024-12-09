import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import MedDataList from './components/MedDataList';

// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

function App() {
  const [medicine, setMedicine] = useState([]);
  // console.log("this data form app.js",medicine);

  return (
    <div className="app-container">
      <AppHeader medicine={medicine} setMedicine={setMedicine}/>
      <MedDataList medicines={medicine}/>
    </div>
  );
}

export default App;