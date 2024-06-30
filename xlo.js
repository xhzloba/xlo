const groupBy = require('./groupBy');
const isArray = require('./isArray');
const GroupedObject = require('./GroupedObject');


module.exports = {
    groupBy,
    sortBy: GroupedObject.prototype.sortBy,
    isArray,
};