module.exports = function toReadable (number) {
    let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let ten = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let tenone = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    number = String(number);
    
    let result = '';
    let numOfChar = number.length;

    if (number.length == 1) {
        result += one[number];
        return result;
    } 
    else if (numOfChar == 2 & number[1] == '0') {
        let firstNum = number.charAt(0);
        result += ten[Number(firstNum-1)];
        return result;
        }
    else if (numOfChar == 2 & number[1] !== '0' & Number(number) >= 11 & Number(number) <= 19) {
        let firstNum = number.charAt(1);
        result += tenone[Number(firstNum-1)];
        return result;
    }
    else if (numOfChar == 2 & number[1] !== '0' & Number(number) > 19) {
        let firstNum = number.charAt(0);
        let secondNum = number.charAt(1);
        result += ten[Number(firstNum-1)] + ' ' + one[Number(secondNum)];
        return result;
    } 
    else if (numOfChar == 3 & Number(number[1] == 0) & Number(number[2] == 0)) {
        let firstNum = number.charAt(0);
        result += hundreds[Number(firstNum-1)];
        return result;
    }
    else if (numOfChar == 3 & Number(number[1] == 1) & Number(number[2] == 0)) {
        let firstNum = number.charAt(0);
        let secondNum = number.charAt(2);
        result += hundreds[Number(firstNum-1)] + ' ' + ten[Number(secondNum)];
        return result;
    }
    else if (numOfChar == 3 & Number(number[1] == 1) & Number(number[2] <= 9)) {
        let firstNum = number.charAt(0);
        let secondNum = number.charAt(2);
        result += hundreds[Number(firstNum-1)] + ' ' + tenone[Number(secondNum-1)];
        console.log('1');
        return result;
    }
    else if (numOfChar == 3 & Number(number[1] == 0)) {
        let firstNum = number.charAt(0);
        let secondNum = number.charAt(1);
        let thirdNum = number.charAt(2);
        result += hundreds[Number(firstNum-1)] + ' ' + one[Number(thirdNum)];
        return result;
    }
    else if (numOfChar == 3 & Number(number[2] == 0)) {
        let firstNum = number.charAt(0);
        let secondNum = number.charAt(1);
        result += hundreds[Number(firstNum-1)] + ' ' + ten[Number(secondNum-1)];
        return result;
    }
    else if (numOfChar == 3 & Number(number[1] !== 1)) {
        let firstNum = number.charAt(0);
        let secondNum = number.charAt(1);
        let thirdNum = number.charAt(2);
        result += hundreds[Number(firstNum-1)] + ' ' + ten[Number(secondNum-1)] + ' ' + one[Number(thirdNum)];
        return result;
    }
};