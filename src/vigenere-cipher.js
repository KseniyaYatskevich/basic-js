class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if(!message || !key) throw new Error();
        let messageArray = message.toUpperCase().split('');
        let keyArray = key.toUpperCase().split('');
        let result = messageArray.map(letter => {
            let code = letter.charCodeAt(0) - 65;

            if (code < 0 || code > 25) {
                return letter;
            }

            let keyLetter = keyArray.shift();
            let keyCode = keyLetter.charCodeAt(0) - 65;

            keyArray.push(keyLetter);

            return String.fromCharCode((code + keyCode) % 26 + 65);
        });
        if(!this.isDirect) {
            return result = result.reverse().join('');
        } else return result.join('');
    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key) throw Error();
        let encryptedMessagearray = encryptedMessage.toUpperCase().split('');
        let keyArray = key.toUpperCase().split('');

        let result = encryptedMessagearray.map(letter => {
            let code = letter.charCodeAt(0) - 65;

            if (code < 0 || code > 25) {
                return letter;
            }

            let keyLetter = keyArray.shift();
            let keyCode = keyLetter.charCodeAt(0) - 65;

            keyArray.push(keyLetter);

            return String.fromCharCode((code + 26 - keyCode) % 26 + 65);
        });
        if(!this.isDirect) {
           return  result = result.reverse().join('');
        } else return result = result.join('');
        console.log(encryptedMessage, 11);
        console.log(key, 22);
    }
}

module.exports = VigenereCipheringMachine;
