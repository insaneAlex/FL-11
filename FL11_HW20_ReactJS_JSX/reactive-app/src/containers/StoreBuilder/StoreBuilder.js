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
            currentPack: null
        }
        this.addToBasketHandler = this.addToBasketHandler.bind(this);
        this.deleteFromBasketHandler = this.deleteFromBasketHandler.bind(this);
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

    componentDidMount() {
        fetch('http://localhost:1337/emoji-shop')
            .then(response => response.json())
            .then(data => {
                const rand = Math.floor(Math.random() * data.emoji.length);
                console.log(data.emoji);
                this.setState({
                    emoji: data.emoji,
                    currentPack: data.emoji[rand]
                })
            })
    }

    render() {
        console.log(`Current Pack:`)
        console.log(this.state.currentPack)

        return (
            <div className={classes.StoreBuilder}>
                {this.state.currentPack !== null ?
                    <Emojis
                        currentPackObj={this.state.currentPack} //only to EmojiDescription
                        emojisArray={this.state.emoji} //to draw EmojiList
                        addToBasket={this.addToBasketHandler} //Buttom /add to basket
                    />
                    : <div>Emoji server is not responding...</div>
                }
                <Basket basket={this.state.basket} />
            </div>//
        )
    }
}

export default StoreBuilder;