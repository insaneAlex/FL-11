import React from 'react';
import Pack from './Pack/Pack';
import classes from './EmojiList.module.scss'

const emojiList = props => {
    const emojiArray = props.emoji;
    const emojiList = emojiArray.map(el => <Pack
        add={props.AddToCart}
        emojiData={el}
        key={el.id}
    />)
    return (
        <div className={classes.PacksList}>
            {emojiList}
        </div>
    )
}

export default emojiList;