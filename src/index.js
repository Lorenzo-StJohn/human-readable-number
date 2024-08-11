module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    let result = '';
    if (number >= 900) {
        result += 'nine hundred';
        number -= 900;
    }
    if (number >= 800) {
        result += 'eight hundred';
        number -= 800;
    }
    if (number >= 700) {
        result += 'seven hundred';
        number -= 700;
    }
    if (number >= 600) {
        result += 'six hundred';
        number -= 600;
    }
    if (number >= 500) {
        result += 'five hundred';
        number -= 500;
    }
    if (number >= 400) {
        result += 'four hundred';
        number -= 400;
    }
    if (number >= 300) {
        result += 'three hundred';
        number -= 300;
    }
    if (number >= 200) {
        result += 'two hundred';
        number -= 200;
    }
    if (number >= 100) {
        result += 'one hundred';
        number -= 100;
    }
    if (number >= 20) {
        if (result.length > 0) result += ' ';
    }
    if (number >= 90) {
        result += 'ninety';
        number -= 90;
    }
    if (number >= 80) {
        result += 'eighty';
        number -= 80;
    }
    if (number >= 70) {
        result += 'seventy';
        number -= 70;
    }
    if (number >= 60) {
        result += 'sixty';
        number -= 60;
    }
    if (number >= 50) {
        result += 'fifty';
        number -= 50;
    }
    if (number >= 40) {
        result += 'forty';
        number -= 40;
    }
    if (number >= 30) {
        result += 'thirty';
        number -= 30;
    }
    if (number >= 20) {
        result += 'twenty';
        number -= 20;
    }
    if (number > 0) {
        if (result.length > 0) result += ' ';
    }
    if (number === 19) {
        result += 'nineteen';
    }
    if (number === 18) {
        result += 'eighteen';
    }
    if (number === 17) {
        result += 'seventeen';
    }
    if (number === 16) {
        result += 'sixteen';
    }
    if (number === 15) {
        result += 'fifteen';
    }
    if (number === 14) {
        result += 'fourteen';
    }
    if (number === 13) {
        result += 'thirteen';
    }
    if (number === 12) {
        result += 'twelve';
    }
    if (number === 11) {
        result += 'eleven';
    }
    if (number === 10) {
        result += 'ten';
    }
    if (number === 9) {
        result += 'nine';
    }
    if (number === 8) {
        result += 'eight';
    }
    if (number === 7) {
        result += 'seven';
    }
    if (number === 6) {
        result += 'six';
    }
    if (number === 5) {
        result += 'five';
    }
    if (number === 4) {
        result += 'four';
    }
    if (number === 3) {
        result += 'three';
    }
    if (number === 2) {
        result += 'two';
    }
    if (number === 1) {
        result += 'one';
    }
    return result;
}
