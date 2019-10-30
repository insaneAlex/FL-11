import React from 'react';
import AddButton from '../AddButton/AddButton';
import classes from './EmojiDescription.module.scss';

const CurrentPackDescription = props => {
    const packsEmoji = props.currentPack.emoji;
    const title = props.currentPack.title;
    let chars = '';
    if (packsEmoji !== undefined) {
        for (let i = 0; i < packsEmoji.length; i++) {
            chars = chars.concat(packsEmoji[i].char + ' ');
        }
    }
    return (
        <div className={classes.EmojiDescription}>
            <h2>New! {title}</h2>
            <h4>Includes: </h4>
            <div>{chars}</div>
            <AddButton
                disableButtonHandler={props.disableButtonHandler}
                totalCounter={props.totalCounter}
                addCart={props.AddToCart}
                emojiData={props.currentPack}
                disabled={props.currentPack.disabled}
            >Get </AddButton>
        </div>
    )
}

export default CurrentPackDescription;