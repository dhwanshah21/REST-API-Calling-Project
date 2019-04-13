import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const cities = ['California', 'New York', 'Seattle'];


class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            activeDropdown: undefined,
            activeDropdownData: undefined
        };
        this.printWeather = this.printWeather.bind(this);
        this.changeState = this.changeState.bind(this);
        this.callApi = this.callApi.bind(this);
    }


    callApi = async (city) => {

        const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
        const appid = '&appid=dd802f84a91921df40ed2aaef25cffb4'; // key
        const unit = '&units=metric'
        const url = baseUrl + city  + unit + appid  ;

        const response = await fetch(url);
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) {
            throw Error(body.message)
        };

        
        this.setState({activeDropdownData: body });
        console.log('activeDropdownData', this.state.activeDropdownData);
    };

    printWeather() {
        const data = this.state.activeDropdownData; 
   
        console.log(' PRINT WEATHER: activeDropdownData:', data);
        console.log(' PRINT WEATHER: MAIN:', this.state.activeDropdownData.weather);
        
            return (<ul className="weather-list">

                <li>City: {data.name}</li>
                <li>Humidity: {data.main.humidity}</li>
                <li>Temperature: {data.main.temp} C</li>
                <li>Description: {data.weather[0].description}</li>
            </ul>);

    }

    changeState (city) {
        console.log({ city });
        this.setState({ activeDropdown : city});
        this.callApi(city)
    }


    render() {
        const { data, activeDropdown, activeDropdownData }  = this.state;
        console.log('DATA:', this.data);
        return (
            <div className="weather">
                <ul>
                    <h1> WEATHER FORECAST</h1>
                    <p> Select the city/state to know the weather condition</p>
                    <DropdownButton 
                        id="dropdown-basic-button" title={activeDropdown ? activeDropdown:'Select City' } >
                        {
                            
                            cities.map((city, index) => {
                            console.log('index', index);
                            return <Dropdown.Item key={index} onClick={ () =>{ this.changeState(city) }}>
                            {city}
                            </Dropdown.Item>
                            })
                        }
                    </DropdownButton>
                    <div className="weather-info">
                        {activeDropdownData ? this.printWeather() : '' }
                    </div>
                </ul>
            </div>
        );
    }
}


export default Weather;