/* Un closure es la combinación de una función y del ámbito léxico en la cuál ha sido creada la
función. Un closure recuerda el ámbito en el que fue creado. */
const moneyBox = () => {
    var saveCoins = 0;

    const countCoints = (coins) => {
        saveCoins += coins;
        console.log(`Moneybox: $${ saveCoins }.`);
    }

    return countCoints;
}

let myMoneyBox = moneyBox();

myMoneyBox(5);
myMoneyBox(10);