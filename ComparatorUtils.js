const c = require('./constants');

class ComparatorUtils {
    static compareValues(aValue, bValue) {
        if (typeof aValue === c.NUMBER_TYPE && typeof bValue === c.NUMBER_TYPE) {
            return aValue - bValue;
        } else if (typeof aValue === c.STRING_TYPE && typeof bValue === c.STRING_TYPE) {
            return aValue.localeCompare(bValue);
        } else {
            return 0;
        }
    }
}

module.exports = ComparatorUtils;