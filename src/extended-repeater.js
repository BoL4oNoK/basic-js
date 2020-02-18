module.exports = function repeater( str, options = {} ) {
    var repeatStr = (options.hasOwnProperty("repeatTimes") && options["repeatTimes"] !== undefined) ? parseInt(options["repeatTimes"]) : 1;
    var strSeparator = (options.hasOwnProperty("separator") && options["separator"] !== undefined) ? options["separator"] : "+";
    var addition = (options.hasOwnProperty("addition") && options["addition"] !== undefined) ? (options["addition"] === null) ? "null" : options["addition"] : "";
    var additionRepeat = (options.hasOwnProperty("additionRepeatTimes") && options["additionRepeatTimes"] !== undefined) ? parseInt(options["additionRepeatTimes"]) : 1;
    var additionSeparator = (options.hasOwnProperty("additionSeparator") && options["additionSeparator"] !== undefined) ? options["additionSeparator"] : "";
    var arrAdd = [addition];
    if (additionRepeat == 1) {
        str = str + addition;
    } else {
        for (var i = 2; i <= additionRepeat; i++) {
            arrAdd.push(addition);
        }
        str = str + arrAdd.join(additionSeparator);
    }

    var arrStr = [str];
    
    if (repeatStr > 1) {
        for (var i = 2; i <= repeatStr; i++) {
            arrStr.push(str);
        }
    }
    
    var res = arrStr.join(strSeparator);
    return res;

};
  