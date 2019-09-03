import React from 'react';
import Pack from './Pack/Pack';
import classes from './PackList.module.scss'

const packsList = props => {
    const emojiArray = props.emoji;
    const emojiList = emojiArray.map(el => <Pack key={el.id} title={el.title} stars={el.stars} price={el.price} />)

    return (
        <div className={classes.PacksList}>
            {emojiList}
        </div>
    )
}

export default packsList;