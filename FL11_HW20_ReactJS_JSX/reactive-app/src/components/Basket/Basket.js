import React from 'react';
import classes from './Basket.module.scss';
import PurchaseButton from '../Basket/PurchaseButton/PurchaseButton';

const basket = props => {
    let items = props.basket;
    let draw = items.map((el, i) => <p key={i}>{el}</p>)
    console.log(props.sum)
    let sum = props.sum;
    return (
        <div className={classes.Basket}>
            <h4>Basket</h4>
            {items.length !== 0 ? <>
                {draw}
                <PurchaseButton price={sum}>Purchase </PurchaseButton>
            </>
                : <i>No items to purchase</i>}
        </div >
    )
}

export default basket;