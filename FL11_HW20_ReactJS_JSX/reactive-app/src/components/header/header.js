import React from 'react';
import Aux from '../../hoc/Auxx/Aux';
import classes from './header.css';

const header = props => {
    return (
        <Aux>
            <div className={classes.Header}>header</div>
        </Aux>
    )
}

export default header;