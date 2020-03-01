class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        if(!message || !key) throw new Error();
        let messageArray = message.toUpperCase().split('');
        let keyArray = key.toUpperCase().split('');
        let result = [];
        for(let i=0; i<messageArray.length; i++) {
            let codeLetter = messageArray[i].charCodeAt(0) - 65;
            if(codeLetter < 0 || codeLetter > 25) {
                result.push(messageArray[i]);
            } else {

                let keyLetter = keyArray.shift();
                let keyCode = keyLetter.charCodeAt(0) - 65;
                keyArray.push(keyLetter);
                result.push(String.fromCharCode((codeLetter + keyCode) % 26 + 65));
            }
        }
        if(!this.isDirect) {
            return result = result.reverse().join('');
        } else return result.join('');
    }

    decrypt(encryptedMessage, key) {
        if(!encryptedMessage || !key) throw Error();
        let encryptedMessageArray = encryptedMessage.toUpperCase().split('');
        let keyArray = key.toUpperCase().split('');
        let result = [];
        for (let i = 0; i<encryptedMessageArray.length; i++) {
            let codeLetter = encryptedMessageArray[i].charCodeAt(0) - 65;
            if (codeLetter < 0 || codeLetter > 25) {
                result.push(encryptedMessageArray[i]);
            } else {
                let keyLetter = keyArray.shift();
                let keyCode = keyLetter.charCodeAt(0) - 65;
                keyArray.push(keyLetter);
                result.push(String.fromCharCode((codeLetter + 26 - keyCode) % 26 + 65));
            }
        }
        if(!this.isDirect) {
           return  result = result.reverse().join('');
        } else return result = result.join('');
    }
}

module.exports = VigenereCipheringMachine;
