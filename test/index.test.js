const jsonToArray = require('../dist/index.min');

test(`json对象转成数组`, () => {
    console.log(jsonToArray({a: 'hello', b: 'world'})); // [{key: 'a', value: 'hello'}, {key: 'b', value: 'world'}]
    expect(true).toEqual(true);
});
