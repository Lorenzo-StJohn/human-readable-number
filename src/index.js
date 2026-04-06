module.exports = function toReadable(number) {
  let currentNumber = number;
if (currentNumber === 0) return 'zero';
    let result = '';
    if (currentNumber >= 900) {
        result += 'nine hundred';
        currentNumber -= 900;
    }
    if (currentNumber >= 800) {
        result += 'eight hundred';
        currentNumber -= 800;
    }
    if (currentNumber >= 700) {
        result += 'seven hundred';
        currentNumber -= 700;
    }
    if (currentNumber >= 600) {
        result += 'six hundred';
        currentNumber -= 600;
    }
    if (currentNumber >= 500) {
        result += 'five hundred';
        currentNumber -= 500;
    }
    if (currentNumber >= 400) {
        result += 'four hundred';
        currentNumber -= 400;
    }
    if (currentNumber >= 300) {
        result += 'three hundred';
        currentNumber -= 300;
    }
    if (currentNumber >= 200) {
        result += 'two hundred';
        currentNumber -= 200;
    }
    if (currentNumber >= 100) {
        result += 'one hundred';
        currentNumber -= 100;
    }
    if (currentNumber >= 20) {
        if (result.length > 0) result += ' ';
    }
    if (currentNumber >= 90) {
        result += 'ninety';
        currentNumber -= 90;
    }
    if (currentNumber >= 80) {
        result += 'eighty';
        currentNumber -= 80;
    }
    if (currentNumber >= 70) {
        result += 'seventy';
        currentNumber -= 70;
    }
    if (currentNumber >= 60) {
        result += 'sixty';
        currentNumber -= 60;
    }
    if (currentNumber >= 50) {
        result += 'fifty';
        currentNumber -= 50;
    }
    if (currentNumber >= 40) {
        result += 'forty';
        currentNumber -= 40;
    }
    if (currentNumber >= 30) {
        result += 'thirty';
        currentNumber -= 30;
    }
    if (currentNumber >= 20) {
        result += 'twenty';
        currentNumber -= 20;
    }
    if (currentNumber > 0) {
        if (result.length > 0) result += ' ';
    }
    if (currentNumber === 19) {
        result += 'nineteen';
    }
    if (currentNumber === 18) {
        result += 'eighteen';
    }
    if (currentNumber === 17) {
        result += 'seventeen';
    }
    if (currentNumber === 16) {
        result += 'sixteen';
    }
    if (currentNumber === 15) {
        result += 'fifteen';
    }
    if (currentNumber === 14) {
        result += 'fourteen';
    }
    if (currentNumber === 13) {
        result += 'thirteen';
    }
    if (currentNumber === 12) {
        result += 'twelve';
    }
    if (currentNumber === 11) {
        result += 'eleven';
    }
    if (currentNumber === 10) {
        result += 'ten';
    }
    if (currentNumber === 9) {
        result += 'nine';
    }
    if (currentNumber === 8) {
        result += 'eight';
    }
    if (currentNumber === 7) {
        result += 'seven';
    }
    if (currentNumber === 6) {
        result += 'six';
    }
    if (currentNumber === 5) {
        result += 'five';
    }
    if (currentNumber === 4) {
        result += 'four';
    }
    if (currentNumber === 3) {
        result += 'three';
    }
    if (currentNumber === 2) {
        result += 'two';
    }
    if (currentNumber === 1) {
        result += 'one';
    }
    return result;
};
