import React from 'react';
import Button from './button.js';


class Clock extends React.Component{
    constructor(props){
        super(props);
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.state={
            time: new Date().toLocaleString(),
        };
    }
    componentDidMount(){
        this.intervalID = setInterval(
            () => this.updateClock(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.intervalID)
    }
    updateClock(){
        this.setState({
            date: new Date().toLocaleString()
        });
    }
    toggleDisplay(){
       this.setState(state =>({
           showClock : !state.display
       }));
    }
    render(){
        return(
            <div>
                <p>
                    Nous sommes le {this.state.date}
                </p>
                <div>
                    <Button clickHandler={this.toggleDisplay} />
                </div>
            </div>
        );
    }
}

export default Clock;