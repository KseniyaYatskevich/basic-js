module.exports = function repeater(str, options) {
    const {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} =options;
    let strNew = str;
    let additionNew = addition;
    let repeatStr = '';
    let separatorNew = '+';
    let additionStr = '';
    let additionSeparatorNew = '||';
    let repeatArray = new Array(repeatTimes);
    let additionArray = new Array(additionRepeatTimes);
    if (str === null) {
        strNew = 'null';
    }
    if (addition === null) {
        additionNew = 'null';
    }
    if(options.hasOwnProperty('additionSeparator')) {
        additionSeparatorNew = additionSeparator;
    }
    if(additionArray.length !== 0) {
        if(additionArray.length === 1) {
            additionStr = additionArray.fill(additionNew).join('');
        }
        additionStr = additionArray.fill(additionNew).join(`${additionSeparatorNew}`);
    }
    if(options.hasOwnProperty('separator')) {
        if(additionStr.length>0) {
            separatorNew = separator + additionStr;
        }
        separatorNew = separator;
    } 
    console.log(separatorNew)
    if(repeatArray.length !== 0) {
        repeatStr = repeatArray.fill(strNew+additionStr).join(`${separatorNew}`);
    }
    console.log(separatorNew)
    console.log(additionStr, 11111)
    return repeatStr;
};
  