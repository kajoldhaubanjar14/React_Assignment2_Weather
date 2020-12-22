import React, { Component } from 'react';
import temperature from './images/weather.png';



class WeatherCard extends Component {
    render() {
        let item = this.props.data;
        //console.log(item.name);
        var day = new Date().toLocaleString('en-us', { weekday: 'long' });
        let dict = item.weather;
        //console.log(dict[0].description);

        return (
            
            <div style={{marginTop:'10%' , borderRadius:10, boxShadow: '0px 0px 30px 10px green', marginLeft: '30%' , background: 'rgba(0, 200, 200, 0.6)', padding: 20, width: '600px'}}>
                <p><b style={{ fontSize: 30, }}>{item.name}, {item.sys.country}</b>

                <br/><b style={{fontSize: 20}}>{day} <br/> Climate: {dict[0].description}</b></p>
                <div>
                    
                    <img src={temperature} width='90' alt="Current Temperature" style={{ marginBottom: -40 }} />
                    <b style={{ fontSize: 40 }}>{item.main.temp}&#176;C</b>
                </div>
                <div>
                    <p style={{fontSize: 20}}>
                    Max. Temperature = {item.main.temp_max}&#176;C<br/>
                    Min. Temperature = {item.main.temp_min}&#176;C<br/>
                    Pressure = {item.main.pressure}<br/>
                    Humidity = {item.main.humidity}&#176;C<br/></p>
                </div>
            </div>
            
        );
    }
}

export default WeatherCard;