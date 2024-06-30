const ComparatorUtils = require('./ComparatorUtils');

class GroupedObject {
    constructor(obj) {
        Object.assign(this, obj);
    }

    sortBy(key) {
        const sortedKeys = Object.keys(this).sort((a, b) => {
            const aValue = this[a][0][key];
            const bValue = this[b][0][key];
            return ComparatorUtils.compareValues(aValue, bValue);
        });

        const sortedObj = sortedKeys.reduce((acc, k) => {
            acc[k] = this[k];
            return acc;
        }, {});

        return new GroupedObject(sortedObj);
    }
}

module.exports = GroupedObject;