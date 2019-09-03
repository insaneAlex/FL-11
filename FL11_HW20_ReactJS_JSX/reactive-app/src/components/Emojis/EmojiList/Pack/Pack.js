import React from 'react';
import classes from './Pack.module.scss'
import AddButton from '../../AddButton/AddButton';
import StarIcon from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';

const pack = props => {
    console.log(props)
    let rate = [];
    const starsInteger = Math.floor(props.stars);
    let difference = props.stars - starsInteger;

    for (let i = 0; i < starsInteger; i++) {
        rate[i] = <StarIcon key={rate.length + 1} />
    }
    if (difference >= 0.5) {
        rate.push(<StarHalf key={rate.length + 1} />)
    }


    return (
        <div className={classes.Pack}>
            <p>{props.title}</p>
            <div>Rate: {props.stars}</div>

            <div className={classes.Rate}>
                {rate}
            </div>
            <AddButton price={props.price} />
        </div>
    )
}

export default pack;