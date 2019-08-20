const myAssign = function (target, ...sources) {
    sources.forEach((source) => {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    });
    return target;
};