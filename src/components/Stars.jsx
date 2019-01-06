import React from 'react';
const _ = require('lodash');

const Stars = () => {
    let numberOfStars = 1 + Math.round(Math.random()*9);
    return (
        <div className="col-5">
            {_.range(numberOfStars).map(i => 
                <i key={i} className="fa fa-star"></i>
            )}
        </div>
    );
};
 
export default Stars;