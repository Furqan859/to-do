import React, { useState } from 'react';
import './App.css';
import Cart from './component/Cart'
import Dropdown from './component/Dropdown';
function App() {
  const [getdata, setGetData] = useState();
  const [array, setArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.warn(getdata)
    const data = getdata
    setArray((a)=>[data,...a]);
    
    setGetData("")
    console.warn(array)
  }

  
  return (<>
    <Cart handleSubmit={handleSubmit}  getdata={getdata} array={array}  setGetData={setGetData} />
 
          <Dropdown getdata={getdata} setArray={setArray} array={array} />
 
           </>  );
}

export default App;
