import React from 'react'


// function LocalTime() {
//     const time = new Date().getHours();
//     let greeting = 'Morning'
//     if(time < 12) {
//         greeting = "Morning";
//     }
//     else if (time < 17) {
//         greeting = "Afternoon";
//     }
//     else {
//         greeting = "Night";
//     }

//     return (<div>
//         <h1>Hello World Good {greeting}! </h1>
//         <h2>{new Date().toLocaleTimeString() }</h2>
//     </div>
//   );
// }

//Using Class

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        };
    }

    //Make Clock set up its own timer and update itself every second.
    //ADDING LIFECYCLE METHODS TO A CLASS -> COMPONENT MOUNTING AND UNMOUNTING
    
    componentDidMount() {
        // this method runs after the component output has been rendered to the DOM
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }


    //Finally, we will implement a method called tick() that the clock component 
    //will ren every second.
    //It will use this.setState() to schedule updates to the component local state
    tick() {
        this.setState({
            date: new Date()
        });
    }

    //Greet depending on the time of the day
    greeting = () => {
        const time = this.state.date.getHours();
        if(time < 12) {
            return "Morning"
        } else if (time < 17) {
            return "Afternoon"
        } else {
            return "Night"
        }
    }

    // render method 
    render() {
        return (
            <div>
                <h1>Hello, World Good {this.greeting()}!</h1>
                <h2>
                    It is {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        )
    }
}

export default Clock;