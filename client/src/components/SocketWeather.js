import React, {useState, useEffect} from 'react';
import SocketIOClient from 'socket.io-client';

const SocketWeather = () => {
    const [response, setResponse] = useState(false);
    const [endpoint, setEndpoint] = useState('http://localhost:4000');
    const [temp, setTemp] = useState({});
    const [city, setCity] = useState('');
    
    useEffect(() => {
        // setResponse(true)
        const socket = SocketIOClient(endpoint);
        socket.on('FromAPI', (data) => {
            // console.log(data);
            setResponse('true')
            setTemp(data.main)
            setCity(data.name)
        })

        // return ()=> {
        //     setResponse(true)
        //     setTemp(data.main)
        //     setCity(data.name)
        // }
    });

    return (
        <div style={{textAlign: 'center'}}>
           {response
           ?
           <p>The temperature in {city} is: {temp} °C</p>
           :
           <p>Loading...</p>
        } 
        </div>
    );
}

export default SocketWeather;
