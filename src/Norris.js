import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

class Norris extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            joke: '',
        }
    }

    componentDidMount()
    {
        const baseUrl = 'http://api.icndb.com/jokes/random?exclude=';
        const param = '[explicit]';
        const url = baseUrl + param;
        axios.get(url)
        .then((networkResponse) => 
        {
            this.setState({
                joke: networkResponse.data.value.joke,
            })
            console.log(networkResponse.data);
        })
        .catch(error => 
        {
            console.log(error, 'Failed to generate request.');
        });
    }

    render()
    {
        const {joke} = this.state;
        return(
            <React.Fragment>
            <div>{joke}</div>
            <br></br>
            <Button variant = "primary" onClick = {this.componentDidMount.bind(this)}>Another One</Button>
            </React.Fragment>
        )
    }
}

export default Norris;