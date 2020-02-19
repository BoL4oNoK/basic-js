module.exports = function transform( arr ) {
    if (Array.isArray(arr)) {
        var arrRes = [];
        arr.forEach(function (element, index) {
            switch (element) {
                case "--double-prev":
                    if (index > 0) arrRes.push(arr[index - 1]);
                    break;
                case "--double-next":
                    if (index + 1 < arr.length) arrRes.push(arr[index + 1]);
                    break;
                case "--discard-prev":
                    if (index > 0) arrRes.pop();
                    break;
                case "--discard-next":
                    break;
                default:
                    if (arr[index - 1] !== "--discard-next") arrRes.push(element);
                    break;
            }

        });
        return arrRes;
    } else {
        throw Error('I need array.');
    }
};
