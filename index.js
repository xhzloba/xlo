const {
    groupBy,
    isArray,
    sortBy
} = require("./xlo");

const data = [
    {name: 'dima', age: 40, role: 'user', birthday: 1990},
    {name: 'andrey', age: 20, role: 'user', birthday: 1989},
    {name: 'oksana', age: 23, role: 'admin', birthday: 1994},
    {name: 'anton', age: 23, role: 'admin', birthday: 1994},

]

console.log(data.groupBy('name').sortBy('birthday'));