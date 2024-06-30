const ArrayUtils = require('./ArrayUtils');
/**
 * Проверяет, является ли значение массивом.
 *
 * @function isArray
 * @param {*} value - Значение для проверки.
 * @returns {boolean} - Возвращает true, если значение является массивом, иначе false.
 *
 * @example
 * const data = [1, 2, 3];
 * const result = isArray(data);
 * console.log(result); // true
 */
function isArray(value) {
    return ArrayUtils.isArray(value);
}

module.exports = isArray;
