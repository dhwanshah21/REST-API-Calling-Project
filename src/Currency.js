import React, { Component } from 'react';
import axios from 'axios';
import './Currency.css';



class Currency extends Component {

    constructor() {
        super()
        this.state= {
            test:{},
            showText:false,
            result : '',
            text : '',
        };
        
    }

    handleClick = () => {
        
        let x = document.getElementById('currencyOptions').selectedIndex;
        let currencyText = document.getElementById('currencyOptions').options[x].text;
        let currencyType = document.getElementById('currencyOptions').value;
        this.setState({
            result: currencyType,
            text : currencyText,
            showText : true,
        })
    }

    componentDidMount() {
        const url= 'http://www.apilayer.net/api/live?access_key=ad52f1d800e231a2cd7ad52318695780';
        axios.get(url)
        .then( (response) => {
            this.setState({
                test: response.data.quotes,  
              })
        }).catch ( (error) => {
            console.log(error,'Not Working!');
        });
    }
    render() {
       const {showText, test, result, text} = this.state;
        return (
            <div className='currencyPage'>
                <h3> CURRENCY RATE CONVERSION $</h3>
                <div className='mainContent'>
                    <p>US DOLLAR ($) TO :  </p>
                    <select id='currencyOptions' onChange = { () => this.handleClick() }>
                            <option> </option>
                            <option value={test.USDINR}>Indian Rupee</option>
                            <option value={test.USDPHP}>Philippine Piso</option>
                            <option value={test.USDEUR}>Euro</option>
                            <option value={test.USDMXN}>Mexican Peso</option> 
                            <option value={test.USDCNY}>Chinese Yuan</option>                
                    </select>
                    <div className='value'>
                    { 
                        showText &&  <p className='result'>1 US dollar is equal to  {result} {text} </p>
                    }
                    </div>
                </div>                
            </div>
        );
    }
}

export default Currency;