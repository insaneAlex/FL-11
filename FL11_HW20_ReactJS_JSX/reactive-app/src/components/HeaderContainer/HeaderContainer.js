import React from 'react';
import classes from './HeaderContainer.module.scss';
import Basket from './Basket/Basket'
import CurrentPackDescription from './CurrentPackDescription/CurrentPackDescription';

const HeaderContainer = props => {
    return (
        <div className={classes.HeaderContainer}>
            <CurrentPackDescription
                currentPack={props.currentPack}
                addItem={props.getItem} />
            <Basket itemsToPurchase={props.itemsToPurchase} />
        </div>
    )
}

export default HeaderContainer;