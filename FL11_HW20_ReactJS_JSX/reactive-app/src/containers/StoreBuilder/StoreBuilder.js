import React, { Component } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import PacksList from '../../components/PacksList/PacksList';
import classes from './StoreBuilder.module.scss';

class StoreBuilder extends Component {

    state = {
        emoji: [],
        itemsToPurchase: [],
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
        return (
            <div className={classes.Header}>
                {this.state.currentPack !== null ?
                    <HeaderContainer
                        currentPack={this.state.currentPack}
                        itemsToPurchase={this.state.itemsToPurchase}
                        getItem={this.addToCartHandler} />
                    : null}
                {this.state.emoji !== null ?
                    <PacksList
                        emoji={this.state.emoji}
                        getItem={this.addToCartHandler} />
                    : null}
            </div>
        )
    }
}

export default StoreBuilder;