const Fighter = props => {
    const name = props.name;
    const damage = props.damage;
    const agility = props.agility;
    const hp = props.hp;

    let curentHP = hp;
    let wins = 0;
    let loses = 0;

    const getName = () => {
        return name;
    }
    const getDamage = () => {
        return damage;
    }
    const getAgility = () => {
        return agility;
    }
    const getHealth = () => {
        return curentHP;
    }
    const attack = instance => {
        let attackSuccesChance = 100 - instance.getAgility();
        const randChance = (Math.random() * 101);
        let info = '';
        if (attackSuccesChance > randChance) {
            instance.dealDamage(getDamage());
            info = `${getName()} make ${getDamage()} damage to ${instance.getName()}`;
        } else {
            info = `${getName()} attack missed`;
        }
        console.log(info)
    }
    const logCombatHistory = () => {
        console.log(`Name: ${name}, Wins: ${wins}, Loses: ${loses}`);
    }
    const heal = amount => {
        curentHP += amount;
        if (curentHP > hp) {
            curentHP = hp;
        }
    }
    const dealDamage = dmg => {
        curentHP -= dmg;
        if (curentHP < 0) {
            curentHP = 0;
        }
    }
    const addWin = () => {
        wins++;
    }
    const addLoss = () => {
        loses++;
    }
    return { getName, getHealth, getDamage, getAgility, attack, logCombatHistory, heal, dealDamage, addLoss, addWin }
}

const battle = (fighter1, fighter2) => {
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() > 0) {
                fighter2.attack(fighter1);
                if (fighter1.getHealth() <= 0) {
                    fighter1.addLoss();
                    fighter2.addWin();
                }
            } else {
                fighter2.addLoss();
                fighter1.addWin();
            }
        }
    } else {
        console.log('Fighters HP must be more than 0.')
    }
}