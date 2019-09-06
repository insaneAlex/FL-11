import React from 'react';
import classes from './Pack.module.scss'
import AddButton from '../../AddButton/AddButton';
import StarIcon from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';

const pack = props => {
    const emojiPackObj = props.emojiData;
    const starsInteger = Math.floor(emojiPackObj.stars);

    const rate = [];
    for (let i = 0; i < starsInteger; i++) {
        rate.push(<StarIcon key={rate.length + 1} />);
    }
    if ((emojiPackObj.stars - starsInteger) >= 0.5) {
        rate.push(<StarHalf key={rate.length + 1} />);
    }

    return (
        <div className={classes.Pack}>
            <div>
                {/* <span>{emojiPackObj.emoji[0].char}{emojiPackObj.emoji[1].char}{emojiPackObj.emoji[2].char}</span> */}
                <span className={classes.Char1}>{emojiPackObj.emoji[0].char}</span>
                <span className={classes.Char2}>{emojiPackObj.emoji[1].char}</span>
                <span className={classes.Char3}>{emojiPackObj.emoji[2].char}</span>
            </div>
            <h3>{emojiPackObj.title}</h3>
            <div className={classes.Rate}>
                {rate}
            </div>
            <AddButton addCart={props.add} emojiData={emojiPackObj}>Get </AddButton>
        </div>
    )
}

export default pack;