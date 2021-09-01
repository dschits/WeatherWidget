// This is backup file, please dont use this.
// Delete this sample1.js file from ur folder

import React,{useState,useEffect} from 'react'

function Exted(props) {
    
    const [ss, setSs] = useState('');

    useEffect(()=>{
    if (props.al === 'Snow') {
        setSs("fas fa-snowflake")
    } else if (props.al === 'Clouds') {
        setSs('fas fa-cloud')
    } else if(props.al === 'Haze'){
        setSs('fas fa-smog');
    }else if(props.al === 'Rain'){
        setSs('fas fa-cloud-rain');
    }else if (props.al === 'Clear') {
        setSs('fas fa-sun');
    } else if(props.al === 'Mist' || 'Fog' || 'Smoke') {
        setSs('fas fa-cloud-moon');
    }
   },[props.al])

    return (
        <div>
             <h3 ><i  class={ss}></i>{props.al}</h3>
        </div>
    )
}

export default Exted


import React,{useState} from 'react'
import Exted from './Exted'
import './App.css'
const api = {
  key:'5afcca12834a8cc45e42a9956a76b069',
  base:'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [det, setDet] = useState({});
  const [place, setPlace] = useState('');

  const getPlace = (e) =>{
    setPlace(e.target.value);
  }
  const getDet = () =>{
    setPlace('');
    fetch(`${api.base}weather?q=${place}&units=metric&appid=${api.key}`)
     .then(ans => ans.json())
     .then(fin => {
      setDet(fin);
    });

  }

  return (
    <div>
      <div className='search'> 
            <input type='text' onChange={(e)=>getPlace(e)} placeholder='Enter Place' value={place} />
            <button onClick={()=>getDet()}><i class="fas fa-search"></i></button>
      </div>
        {(typeof det.main != "undefined") ? ( 
          <div className={((det.main.temp < 16) ? ((det.main.temp > 5) ? 'nc' : 'c'): ((det.main.temp > 30) ? 'h' : 'nh'))} >
            <div className='details'>  
                <h3>{det.name} , {det.sys.country} </h3>
            </div> 
            <div className='temp'>
                <h2>{det.main.temp}°C</h2>
                <Exted  al={det.weather[0].main}/>
            </div>
         </div>)
        : (
        <div className='container'>
         <h2 className='bnbnb'>Weather Widget</h2>
         <i class="fas fa-cloud-sun-rain hghh"></i> </div>)}
   </div> 
  )
}

export default App


