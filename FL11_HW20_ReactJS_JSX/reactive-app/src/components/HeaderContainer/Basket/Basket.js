import React from 'react';
import classes from './Basket.module.scss';

const basket = props => {
    let items = props.itemsToPurchase;
    return (
        <div className={classes.Basket}>
            <h4>Basket</h4>
            {items.length > 0 ? <></> : <i>No items to purchase</i>}
        </div>
    )
}

export default basket;