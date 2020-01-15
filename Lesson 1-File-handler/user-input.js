const readline = require("readline");

const ui = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getValue = massageToShow => {
    return new Promise((resolve, reject) => {
        try {
            ui.question(massageToShow, value => resolve(value));
        }
        catch (err) {
            reject(err);
        }
    });
}

const close = () => {
    ui.close();
}

module.exports = {
    getValue ,
    close 
}