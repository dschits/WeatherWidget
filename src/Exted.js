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

export default Exted;
