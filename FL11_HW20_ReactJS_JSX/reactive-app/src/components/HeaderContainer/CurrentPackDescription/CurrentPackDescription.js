import React from 'react';
import classes from './CurrentPackDescription.module.scss';
import AddButton from '../../PacksList/Pack/AddButton/AddButton';

const CurrentPackDescription = props => {
    const packsEmoji = props.currentPack.emoji;
    let chars = '';
    console.log(packsEmoji[0].char)
    for (let i = 0; i < 3; i++) {
        chars = chars.concat(packsEmoji[i].char + ' ');
    }
    console.log(chars)
    return (
        <div className={classes.CurrentPackDescription}>
            <h2>New! {props.currentPack.title}</h2>
            <h4>Includes</h4>
            <div>{chars}</div>
            <AddButton
                price={props.currentPack.price}
                title={props.currentPack.title}
                getItem={() => props.addItem} />
        </div>
    )
}

export default CurrentPackDescription;