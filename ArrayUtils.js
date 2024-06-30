const c = require('./constants');

class ArrayUtils {

    static nx(m, f) {
        if (!c.ARRAY_PROTOTYPE[m]) {
            c.ARRAY_PROTOTYPE[m] = f;
        }
    }

    static isArray(a) {
        return Array.isArray(a);
    }

    static isCheck(a) {
        return this.isArray(a) &&
            a.every(i => i && typeof i === c.OBJECT_TYPE && !this.isArray(i));
    }
}

module.exports = ArrayUtils;