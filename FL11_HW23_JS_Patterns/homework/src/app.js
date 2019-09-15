class User {
    constructor(name, orderTotalPrice, weekendDiscount, nightDiscount, bonus) {
        this.orderTotalPrice = orderTotalPrice;
        this.name = name;
        this.weekendDiscount = weekendDiscount;
        this.nightDiscount = nightDiscount;
        this.bonus = bonus;
    }

    setBonus() {
        const cart = user;
        const price = cart.orderTotalPrice();
        let bonusCounter = 0;
        const date = new Date();
        const day = date.getDay();
        const hours = date.getHours();

        if (day >= 6 || day <= 0) bonusCounter += cart.weekendDiscount;
        if (hours <= 6 || hours >= 23) bonusCounter += cart.nightDiscount;
        cart.orderTotalPrice = () => price - ((price * bonusCounter) / 100);

    }

    makeOrder() {
        return `Price after discount and including bonuses is ${this.orderTotalPrice()}`
    }
}


getDiscount = (user) => {
    const date = new Date();
    const sunInt = 0;
    const satInt = 6;
    const night = 23;
    const morning = 6;
    const discount = 0.05;

    const hour = date.getHours();
    const day = date.getDay();

    if (hour >= night || hour < morning) {
        user.orderTotalPrice = (user.orderTotalPrice - user.nightDiscount) * discount;
    } else if (day === satInt || day === sunInt) {
        user.orderTotalPrice -= user.weekendDiscount;
    } else {
        console.log('No discount.');
    }
};

getBonus = (order) => {
    order.orderTotalPrice -= order.bonus;
};