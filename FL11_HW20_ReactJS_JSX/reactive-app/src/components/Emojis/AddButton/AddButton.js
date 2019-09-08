import React from 'react';
import classes from './AddButton.module.scss';

const addButton = props => {
    const data = props.emojiData;
    console.log(props.emojiData.price);
    let allClasses = [classes.Button];
    if (props.disabled) {
        allClasses.push(classes.Disabled)
    }
    if (data) {
        const title = data.title;
        return <button
            disabled={props.disabled}
            onClick={() => {
                props.totalCounter(data.price);
                props.disableButtonHandler(data.id);
                props.addCart(title);
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