class VigenereCipheringMachine {
    constructor( direct = true ) {
        this.varDirect = direct;                    // Direction for Encrypt/Decrypt. TRUE - left to right, FALSE - right to left
        this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";    // Alphabet 
        this.abc_length = this.abc.length;      // Position of last letter in Alphabet
        this.offset = "A".charCodeAt();             // Offset for char code according with Alphabet

        return this;
    }
    
    encrypt(message, key) {
        if (!message || !key) throw 'Not implemented';
        var arrCrypted = [];
        var arrMessage = message.toUpperCase().split("");
        if (!this.varDirect) arrMessage.reverse();
        var keyLength = key.length - 1;
        var arrKey = key.toUpperCase().split("");

        var k = 0;
        arrMessage.forEach(element => {
            if (/^[A-Z]$/.test(element)) {
                arrCrypted.push(this.cryptChar(element, arrKey[k]));
                k = (k < keyLength) ? k + 1 : 0;
            } else arrCrypted.push(element);
        });

        return arrCrypted.join("");
    }

    decrypt(message, key) {
        if (!message || !key) throw 'Not implemented';

        var arrDeCrypted = [];
        var arrMessage = message.toUpperCase().split("");
        if (!this.varDirect) arrMessage.reverse();
        var keyLength = key.length - 1;
        var arrKey = key.toUpperCase().split("");

        var k = 0;
        arrMessage.forEach(element => {
            if (/^[A-Z]$/.test(element)) {
                arrDeCrypted.push(this.decryptChar(element, arrKey[k]));
                k = (k < keyLength) ? k + 1 : 0;
            } else arrDeCrypted.push(element);
        });

        return arrDeCrypted.join("");
    }

    cryptChar (char, key) {
        var charPos = char.charCodeAt() - this.offset;
        var keyPos = key.charCodeAt() - this.offset;

        var cryptPos = charPos + keyPos;
        if (cryptPos >= this.abc_length) { cryptPos = cryptPos - this.abc_length; }
        return this.abc.substr(cryptPos, 1);
    }

    decryptChar (char, key) {
        var charPos = char.charCodeAt() - this.offset;
        var keyPos = key.charCodeAt() - this.offset;
        
        var cryptPos = charPos - keyPos;
        if (cryptPos < 0) { cryptPos = this.abc_length - Math.abs(cryptPos); }
        return this.abc.substr(cryptPos, 1);
    }
}

module.exports = VigenereCipheringMachine;