import React from 'react';
import classes from './Emojis.module.scss';
import EmojiDescription from './EmojiDescription/EmojiDescription';
import AddButton from './AddButton/AddButton';
import EmojiList from './EmojiList/EmojiList';

const Emojis = props => {
    return (
        <div className={classes.Emojis}>
            <EmojiDescription
                currentPack={props.currentPack}
            >
                <AddButton
                    price={props.currentPack.price}
                    title={props.currentPack.title} />
            </EmojiDescription>
            <EmojiList emoji={props.emoji} />
        </div>
    )
}

export default Emojis;