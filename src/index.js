
exports.min = function min (array) {
    let result;

    if (array && array.length > 0) {
        array.sort((a, b) => a - b);

        result = array[0];
    } else {
        result = 0;        
    }

    return result;
}

exports.max = function max (array) {
    let result;

    if (array && array.length > 0) {
        array.sort((a, b) => a - b);

        result = array[array.length - 1];
    } else {
        result = 0;        
    }

    return result;
}

exports.avg = function avg (array) {
    let result;

    if (array && array.length > 0) {
        result = array.reduce((a, b) => a + b, 0) / array.length;
    } else {
        result = 0;        
    }

    return result;
}
