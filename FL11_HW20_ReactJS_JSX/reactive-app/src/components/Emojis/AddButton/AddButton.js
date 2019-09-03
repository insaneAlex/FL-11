import React from 'react';
import classes from './AddButton.module.scss';
//009AFF
const addButton = props => {
    return <button
        className={classes.Button}>Get ({props.price}$)</button>
}

export default addButton;