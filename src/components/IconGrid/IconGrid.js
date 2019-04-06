import React, { Component } from 'react';
import './icon.module.css';

class IconGrid extends Component {
    render() {
        return(
            <div className="col text-center">
                <img className=" mx-auto d-block" src={this.props.image} alt="icons"/>
                <h5 className="text-center mt-2">{this.props.title}</h5>
            </div>
        )
    }     
}
export default IconGrid