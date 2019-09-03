import React from 'react';
import classes from './Pack.module.scss'
import AddButton from './AddButton/AddButton';
import StarIcon from '@material-ui/icons/Star';
import StarHalf from '@material-ui/icons/StarHalf';

const pack = props => {

    let rate = [];

    console.log(Math.floor(props.rate))
    for (let i = 0; i < Math.floor(props.stars); i++) {
        rate[i] = <StarIcon />
    }
    if (props.stars - Math.floor(props.stars) >= 0.5) {
        rate.push(<StarHalf />)
    }
    console.log(rate)

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