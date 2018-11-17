import React, { Component } from 'react';

import "./css/ImageWidget.css"

class ImageWidget extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }

    updateValue = () => {
        const newValue = this.state.value === 3 ? 1 : this.state.value + 1;
        this.setState({value: newValue}); 
    }

    componentDidMount(){
        setInterval(this.updateValue, 5000);
    }
    
    render(){
        return (
            <img className="ImageWidget" src={"./seafloor" + this.state.value.toString() + ".png"} />
        )
    } 

}

export default ImageWidget;