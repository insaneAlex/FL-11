import React from 'react';
import classes from '../PurchaseButton/PurchaseButton.module.scss';

const purchaseButton = props => {
    return <button
        onClick={() => {
            alert('Purchase completed!')
        }}
        className={classes.Button}
    >Purchase ({props.price}$)</button>
}

export default purchaseButton;