import React from 'react';
import Pack from './Pack/Pack';
import classes from './EmojiList.module.scss'

const emojiList = props => {
    const emojiArray = props.emoji;
    const emojiList = emojiArray.map(el => <Pack addToCart={props.addToCartHandler} key={el.id} title={el.title} stars={el.stars} price={el.price} />)

    return (
        <div className={classes.PacksList}>
            {emojiList}
        </div>
    )
}

export default emojiList;