module.exports = function reverse (n) {

    const str = Math.abs(n).toString();
    const strArray = str.split('');
    const reversedStrArray = strArray.reverse();
    const reversedStr = reversedStrArray.toString();
    const newReversedStr = reversedStr.replace(/,/g, '');

    return parseInt(newReversedStr);

}
