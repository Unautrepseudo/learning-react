import React from 'react';

class Button extends React.Component{
    constructor(props){
        super (props);
        this.state={
            content : true
        };
        this.handleToggle =this.handleToggle.bind(this);
    }
    handleToggle(){
        this.props.clickHandler();
        this.setState( state =>({
            content: !state.content
        }));
    }

    render(){
        return(
        <button onClick={this.handleToggle} className="button1">
            {this.state.content ? 'Masquer la date du jour' : 'Afficher la date du jour'}
        </button>
        );
    }
}

export default Button;