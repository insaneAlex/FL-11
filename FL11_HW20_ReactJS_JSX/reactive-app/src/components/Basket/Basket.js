import React from 'react';
import classes from './Basket.module.scss';
import PurchaseButton from '../Basket/PurchaseButton/PurchaseButton';

const basket = props => {
    let items = props.basket;
    let draw = items.map((el, i) => <p key={i}>{el}</p>)
    let sum = props.sum;
    const complete = props.completePurchase;
    return (
        <div className={classes.Basket}>
            <h4>Basket</h4>
            {items.length !== 0 ? <>
                {draw}
                <PurchaseButton completePurchase={complete} price={sum}>Purchase </PurchaseButton>
            </>
                : <i>No items to purchase</i>}
        </div >
    )
}

export default basket;