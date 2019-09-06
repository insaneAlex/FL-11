import React from 'react';
import classes from './AddButton.module.scss';

const addButton = props => {
    const data = props.emojiData;

    if (data) {
        const title = data.title;
        return <button
            onClick={() => {
                props.addCart(title)
            }}
            className={classes.Button}
        >{props.children} ({data.price}$)</button>
    } else {
        return <button
            className={classes.Button}
        >{props.children} ({}$)</button>
    }
}

export default addButton;