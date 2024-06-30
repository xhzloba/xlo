
/**
 * groupBy.js
 * @description Этот файл предоставляет функцию для группировки массива объектов по указанному ключу.
 */

const ArrayObjectTools = require('./arrayObjTools');

function groupBy(arr, key, excludeKey = false) {
    return ArrayObjectTools.groupBy(arr, key, excludeKey);
}

module.exports = groupBy;
