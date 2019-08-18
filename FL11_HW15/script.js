function Hamburger(type, calories, secretIngredient) {

    this.type = type;
    let _calories = calories;

    let bitesCount = 0;
    let ingredients = {
        cheese: false,
        tomato: 0,
        secret: secretIngredient
    };

    this.setCalories = function (changedCalories) {
        _calories = changedCalories;
    }
    this.getCalories = function () {
        return _calories;
    }

    this.addCheese = function () {
        if (bitesCount > 0) {
            console.log(`Sorry, you can't add cheese.`);
        } else {
            if (ingredients.cheese) {
                console.log(`Sorry, you can't add cheese only once.`);
            } else {
                const cheeseCalories = 120;
                this.setCalories(this.getCalories() + cheeseCalories)
                ingredients.cheese = true;
            }
        }
    }

    this.addTomato = function () {
        if (bitesCount > 0) {
            console.log(`Sorry, you can't add tomato.`)
        } else {
            const tomatoeMaxAmount = 2;
            const tomatoeCalories = 20;
            if (ingredients.tomato < tomatoeMaxAmount) {
                this.setCalories(this.getCalories() + tomatoeCalories)
                ingredients.tomato++;
            } else {
                console.log('Sorry, you can add tomato only twice.');
            }
        }
    }

    this.addSecretIngedient = function () {
        if (bitesCount > 0) {
            console.log('Sorry, you can not add secret ingredient.')
        } else {
            if (ingredients.cheese === false && ingredients.secret === false && ingredients.tomato === 0) {
                const secretIngredientCalories = 100;
                this.setCalories(this.getCalories() + secretIngredientCalories)
                ingredients.secret = true;
            } else {
                console.log('Sorry, you can add secret ingredient only before another ingredient and only once.');
            }
        }
    }

    this.bite = function () {
        bitesCount++;
    }

    this.info = function () {
        let info = `${this.type} hamburger: `;
        if (ingredients.secret) {
            info += 'with secret ingredient, ';
        }
        if (ingredients.cheese) {
            info += 'with cheese, ';
        }
        if (ingredients.tomato) {
            info += `with ${ingredients.tomato} tomato, `;
        }
        info += `is bit ${bitesCount} times. Total calories: ${this.getCalories()}.`
        return info;
    }
}
