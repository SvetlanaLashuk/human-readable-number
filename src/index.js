module.exports = function toReadable (number) {
    const digits = [' ', 'one', 'two', 'three', 'four',
                    'five', 'six', 'seven', 'eight', 'nine', 'ten',
                    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = [' ', ' ', 'twenty', 'thirty', 'forty',
                    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let resultStr = '';
    let numberArray = String(number).split('');

    if (numberArray.length === 3) {
        resultStr += digits[numberArray[0]] + ' hundred ';
        numberArray.shift();
    }
    if (numberArray.length === 2) {
        if (+numberArray.join('') < 20 ) {
            resultStr += digits[+numberArray.join('')];
        } else {
            resultStr += dozens[numberArray[0]] + ' ';
            numberArray.shift();
        }
    }
    if (numberArray.length === 1) {
        if (number === 0) {
            resultStr = 'zero';
        } else {
            resultStr += digits[numberArray[0]];
        }
    }

    return resultStr.trim();
}
