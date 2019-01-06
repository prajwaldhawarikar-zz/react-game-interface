import React from 'react';
import _ from 'lodash';
const Numbers = (props) => {
    const list = _.range(1, 10);
    return (
        <div className="card text-center">
            <div>
            {list.map((number, i) =>
                <span key={i}>{number}</span> 
            )}
            </div>
        </div>
    );
};

export default Numbers;