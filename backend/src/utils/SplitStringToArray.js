module.exports = function splitString(arrayString){
    return arrayString.split(',').map(arrayString => arrayString.trim());
}