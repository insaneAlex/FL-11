import React, { Component } from 'react';
import Emojis from '../../components/Emojis/Emojis';
import classes from './StoreBuilder.module.scss';
import Basket from '../../components/Basket/Basket';

class StoreBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emoji: [],
            basket: [],
            totalSum: 0,
            currentPack: null
        }
        this.addToBasketHandler = this.addToBasketHandler.bind(this);
        this.deleteFromBasketHandler = this.deleteFromBasketHandler.bind(this);
        this.totalSumCounter = this.totalSumCounter.bind(this);
        this.disableButtonHandler = this.disableButtonHandler.bind(this);
        this.completePurchase = this.completePurchase.bind(this);
    }
    totalSumCounter(price) {
        let oldSum = this.state.totalSum;
        let newSum = oldSum + price;
        this.setState({ totalSum: newSum });
    }
    deleteFromBasketHandler(title) {
        const currBasketState = this.state.basket;
        const updatedBasketState = currBasketState.filter(el => el !== title);
        this.setState({ basket: updatedBasketState });
    }
    addToBasketHandler(elemToAdd) {
        const withNewItem = [...this.state.basket, elemToAdd];
        this.setState({ basket: withNewItem });
    }
    disableButtonHandler(id) {
        const emojiState = this.state.emoji;
        emojiState.forEach(element => {
            if (element.id === id) {
                element.disabled = true;
            }
        });
        this.setState({ emoji: emojiState })
    }
    completePurchase() {
        const emojiState = this.state.emoji;
        const purchaseCost = this.state.totalSum;
        this.setState({
            basket: [],
            totalSum: 0,
            emoji: emojiState
        });
        emojiState.forEach(element => {
            if (element.disabled === true) {
                element.disabled = false;
            }
        });
        alert(`Purchase completed, ${purchaseCost}$ spent!`);
    }
    componentDidMount() {
        fetch('http://localhost:1337/emoji-shop')
            .then(response => response.json())
            .then(data => {
                const rand = Math.floor(Math.random() * data.emoji.length);
                data.emoji.forEach(element => {
                    element.disabled = false;
                });
                this.setState({
                    emoji: data.emoji,
                    currentPack: data.emoji[rand]
                })
            })
    }
    render() {
        return (
            <div className={classes.StoreBuilder}>
                {this.state.currentPack !== null ?
                    <Emojis
                        currentPackObj={this.state.currentPack}
                        emojisArray={this.state.emoji} 
                        addToBasket={this.addToBasketHandler}
                        totalCounter={this.totalSumCounter}
                        disableButtonHandler={this.disableButtonHandler}
                    />
                    : <div>Emoji server is not responding...</div>
                }
                <Basket
                    sum={this.state.totalSum}
                    basket={this.state.basket}
                    completePurchase={this.completePurchase} />
            </div>
        )
    }
}
export default StoreBuilder;