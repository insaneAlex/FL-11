import React from 'react';
import classes from './EmojiDescription.module.scss';

const CurrentPackDescription = props => {
    const packsEmoji = props.currentPack.emoji;
    let chars = '';

    for (let i = 0; i < 3; i++) {
        chars = chars.concat(packsEmoji[i].char + ' ');
    }

    return (
        <div className={classes.EmojiDescription}>
            <h2>New! {props.currentPack.title}</h2>
            <h4>Includes</h4>
            <div>{chars}</div>
            {props.children}
        </div>
    )
}

export default CurrentPackDescription;