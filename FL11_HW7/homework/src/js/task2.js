let decision = confirm('Do you want to play a game?')
if (decision === false) {
    console.log('You did not become a millionaire, but can.')
} else {
    let rangeMultiplicator = 5;
    let moneyMultiplicator = 1;
    let totalPrize = 0;
    let attemps = 3;
    let currentPrize;
    let userChoice;
    const uONE = -1;
    const ONE = 1;
    const TWO = 2;
    const THREE = 3;
    const FIVE = 5;
    const TEN = 10;
    let num = Math.floor(Math.random() * (rangeMultiplicator + 1));
    for (let i = 0; i < THREE; i++) {
        currentPrize = TEN * moneyMultiplicator;
        switch (attemps) {
            case TWO: currentPrize = parseInt(FIVE * moneyMultiplicator); break;
            case ONE: currentPrize = parseInt(FIVE / TWO * moneyMultiplicator); break;
            default: break;
        }
        userChoice = parseInt(prompt(`Enter a number from 0 to ${rangeMultiplicator}
Attempts left: ${attemps}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${currentPrize}$`, '0'));
        if (userChoice === num) {
            switch (attemps) {
                case THREE: totalPrize += TEN * moneyMultiplicator; break;
                case TWO: totalPrize += parseInt(FIVE * moneyMultiplicator); break;
                case ONE: totalPrize += parseInt(FIVE / TWO * moneyMultiplicator); break;
                default: break;
            }
            decision = confirm(`Congrats, do you want to continue the game?`);
            if (decision === false) {
                console.log(`Thank you for a game. Your prize is: ${totalPrize}`);
                decision = confirm(`Do you wanna play again?`);
                if (decision === false) {
                    break;
                } else {
                    num = Math.floor(Math.random() * (rangeMultiplicator + 1));
                    totalPrize = 0;
                    i = uONE;
                    rangeMultiplicator = FIVE;
                    moneyMultiplicator = 1;
                    attemps = THREE;
                    continue;
                }
            } else {
                num = Math.floor(Math.random() * (rangeMultiplicator + 1));
                i = uONE;
                attemps = THREE;
                rangeMultiplicator *= TWO;
                moneyMultiplicator *= THREE;
                continue;
            }
        } else {
            attemps -= 1;
            if (attemps === 0) {
                console.log(`Thank you for a game. Your prize is: ${totalPrize}`);
                decision = confirm(`Do you want to play again?`);
                if (decision === true) {
                    num = Math.floor(Math.random() * (rangeMultiplicator + 1));
                    totalPrize = 0;
                    i = uONE;
                    rangeMultiplicator = FIVE;
                    moneyMultiplicator = 1;
                    attemps = THREE;
                    continue;
                } else {
                    break;
                }
            }
        }
    }
}