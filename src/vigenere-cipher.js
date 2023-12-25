const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  getVigenereCipheringMachineCrypt(message, key, isDirect) {

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    if (message.length > key.length) {
      key = key.repeat(Math.ceil(message.length / key.length));
    }

    const inputMessage = message.toUpperCase();
    const inputKey = key.toUpperCase();
    
    let res = '';

    for (let i = 0, j = 0; i < inputMessage.length; i++) {
      let ch = inputMessage[i];

      if (this.alphabet.indexOf(ch) === -1) {
        res += ch;
        continue;
      }

      let keyChar = inputKey[j];
      let keyIndex = this.alphabet.indexOf(keyChar);
      let codeIndex;

      if (isDirect) {
        codeIndex = (this.alphabet.indexOf(ch) + keyIndex) % this.alphabet.length;
      } else {
        codeIndex = (this.alphabet.indexOf(ch) - keyIndex + this.alphabet.length) % this.alphabet.length;
      }

      res += this.alphabet[codeIndex];
      j++;
    }

    if(this.isDirect) return res;
    return res.split('').reverse().join('');
  }


  encrypt(message, key) {
    return this.getVigenereCipheringMachineCrypt(message, key, true);
  }

  decrypt(message, key) {
    return this.getVigenereCipheringMachineCrypt(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
