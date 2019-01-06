import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-2">
                <button type="button" className="btn btn-primary">=</button>
            </div>
        );
    }
}
 
export default Button;