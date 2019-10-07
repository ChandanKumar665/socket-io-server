import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

export class Weather extends Component {
    constructor() {
        super();
        this.state = {
          response: false,
          endpoint: "http://localhost:4000",
          temp: '',
          city: ''
        }
      }
      componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("FromAPI", data => {
            // console.log(data);
            this.setState({ response: true ,temp: data.main.temp, city: data.name})
        });
      }

    render() {
        const { response, temp, city } = this.state;
        return (
            <div style={{ textAlign: "center" }}>
            {response
                ? <p>
                    The temperature in {city} is: {temp} °C
                </p>
                : <p>Loading...</p>}
            </div>
        );
    }
}

export default Weather;
