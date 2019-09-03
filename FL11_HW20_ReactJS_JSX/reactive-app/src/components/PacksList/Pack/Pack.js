import React from 'react';
import classes from './Pack.module.scss'
import AddButton from './AddButton/AddButton';
import StarIcon from '@material-ui/icons/Star';

const pack = props => {
    console.log(props)
    return (
        <div className={classes.Pack}>
            <p>{props.title}</p>
            <div>Rate: {props.stars}</div>
            <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </div>
            <AddButton price={props.price} />
        </div>
    )
}

export default pack;