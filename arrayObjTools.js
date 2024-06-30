const ArrayUtils = require('./ArrayUtils');
const GroupedObject = require('./GroupedObject');
const c = require('./constants');

class ArrayObjectTools extends ArrayUtils {
    static groupBy(a, k, e = false) {
        if (!ArrayUtils.isCheck(a)) {
            console.error('must be an array of objects');
            return null;
        }
        const grouped = a.reduce((acc, v) => {
            const { [k]: _, ...r } = v;
            return {
                ...acc,
                [v[k]]: [...(acc[v[k]] || []), e ? r : v]
            };
        }, {});
        return new GroupedObject(grouped);
    }

    static extendArrayPrototype() {
        this.nx(c.FN_GROUP_BY, function(k, e = false) {
            return ArrayObjectTools.groupBy(this, k, e);
        });
    }
}

ArrayObjectTools.extendArrayPrototype();

module.exports = ArrayObjectTools;
