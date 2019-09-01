import React from 'react';

const pack = props => {
    return (
        <div>
            <div>{props.ico}</div>
            <p>{props.name} pack!</p>
            <div>{props.rate}</div>
            <button>Get</button>
        </div>
    )
}

export default pack;