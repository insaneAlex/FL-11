import React from 'react';
import classes from '../PurchaseButton/PurchaseButton.module.scss';

const purchaseButton = props => {
    return <button
        onClick={props.completePurchase}
        className={classes.Button}
    >Purchase ({props.price}$)</button>
}

export default purchaseButton;