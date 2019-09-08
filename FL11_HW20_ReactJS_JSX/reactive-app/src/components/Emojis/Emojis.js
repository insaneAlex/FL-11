import React from 'react';
import classes from './Emojis.module.scss';
import EmojiDescription from './EmojiDescription/EmojiDescription';
import EmojiList from './EmojiList/EmojiList';

const Emojis = props => {

    return (
        <div className={classes.Emojis}>
            <EmojiDescription
                AddToCart={props.addToBasket}
                currentPack={props.currentPackObj}
                totalCounter={props.totalCounter}
                disableButtonHandler={props.disableButtonHandler}
            />
            <EmojiList
                AddToCart={props.addToBasket}
                emoji={props.emojisArray}
                totalCounter={props.totalCounter}
                disableButtonHandler={props.disableButtonHandler}
            />

        </div>
    )
}

export default Emojis;