const generateRandomString = length => {
    let randomString = '';
    const possibleChars = 'ABCDEFGHIJKLMNÑSOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';

    for(let i = 0; i < length; i++) {
        randomString += possibleChars.charAt(
            Math.floor(Math.random() * possibleChars.length)
        );
    }

    return randomString;
};

module.exports = generateRandomString;