import React from 'react';

class Button extends React.Component{
    constructor(props){
        super (props);
        this.state={
            content : 'Faire disparaître le timer'
        }
        this.handleToggle =this.handleToggle.bind(this);
    }
    handleToggle(){
        this.setState({
            content: 'Faire apparaître le timer'
        })
    }

    render(){
        return(
        <button onClick={this.handleToggle}className="button1">{this.state.content}</button>
        );
    }
}

export default Button;