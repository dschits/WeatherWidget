import React,{useState} from 'react'
import Exted from './Exted'
import './App.css'

const api = {
  key: {"enter the key that is send to ur mail by openweather api"},
  base:'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const [det, setDet] = useState({});
  const [place, setPlace] = useState('');
   
  const getPlace = (e) =>{
    setPlace(e.target.value);
  }
  const getDet = () =>{
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

export default App;

