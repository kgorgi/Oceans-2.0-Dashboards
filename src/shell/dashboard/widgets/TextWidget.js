import React, { Component } from 'react';

import "./css/Container.css"

class TextWidget extends Component {
    render(){
        return (<h1 className="Container">{this.props.label}</h1>)
    } 
}

export default TextWidget;