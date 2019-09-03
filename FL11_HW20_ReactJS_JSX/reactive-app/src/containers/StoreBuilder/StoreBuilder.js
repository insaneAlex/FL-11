import React, { Component } from 'react';
import Emojis from '../../components/Emojis/Emojis';
// import PacksList from '../../components/PacksList/PacksList';
import classes from './StoreBuilder.module.scss';
import Basket from '../../components/Basket/Basket';

class StoreBuilder extends Component {

    state = {
        emoji: [],
        basket: [],
        currentPack: null
    }
    addToCartHandler = (title, price) => {
        this.state.itemsToPurchase.push({ title, price })
    }

    componentDidMount() {
        fetch('http://localhost:1337/emoji-shop')
            .then(response => response.json())
            .then(data => {
                console.log(data.emoji);
                this.setState({ emoji: data.emoji, currentPack: data.emoji[1] })
            })
    }


    render() {
        console.log(this.state.emoji)
        return (
            <div className={classes.StoreBuilder}>
                {this.state.currentPack !== null ?
                    <Emojis
                        currentPack={this.state.currentPack}
                        emoji={this.state.emoji}
                    />
                    : null}
                <Basket basket={this.state.basket} />
                {/* {this.state.emoji !== null ?
                    <PacksList
                        emoji={this.state.emoji}
                        getItem={this.addToCartHandler} />
                    : null} */}
            </div>
        )
    }
}

export default StoreBuilder;