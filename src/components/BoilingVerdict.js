import React from 'react'

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil</p>;
    }
    return <p>The water would not boil</p>
}

// Convert fahrenheit to celsius
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


// Convert celsius to fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


//Function that takes a string "temperature" and "converter" function as arguments
// returns a string. It will be used to calculate the value of one input based
// on the other input

function tryCovert(temperature, Convert) {
    // Parse a string and return a floating point number
    const input = parseFloat(temperature);

    //If an input is invalid, then return empty string
    if(Number.isNaN(input)) {
        return '';
    }
    //Otherwise return the temperature after converting and rounding it.
    const output = conver(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


// Read the user Inpust and display it in the UI
class TemperatureInput extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    //this will make the change to the temperature state -> Since temperature state
    //is defined in its parent class, so we need to call it thorugh the props
    //to make necessary changes in the state.
    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }


    render() {
        const temperature = this.porps.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleName[scale]}:
                </legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

//BoilingVerdicts follow the current input value
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        };

        this.handleCelsiuschange = this.handleCelsiuschange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    //Handle the celsius change -> changes the temperature to celsius unit
    handleCelsiuschange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    // Handle Fahrenheit change -> change the temperature to Fahrenheit unit
    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature
        });
    }

    // Render the info
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryCovert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryCovert(temperature, toFahrenheit) : temperature;
    
        return (
            <div>
                <TemperatureInput
                     scale="c" 
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiuschange} />

                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange{this.handleFahrenheitChange} />
                
                    <BoilingVerdict
                        celsius={parseFloat{celsius}} />
            </div>
        );
    }
}


export default Calculator;