const assert = require('assert');

console .assert(1 !== 100,'1绝对不等于100');

//assert.deepEqual
//测试第一个参数和第二个参数是否相等 使用 相等运算符（==）比较
//相等什么也不输出 不相等会抛出 AssertionError: 2 deepEqual 4
assert.deepEqual(2,2);

//assert.deepStrictEqual()
//大多数情况下与 assert.deepEqual() 一样，但有三个例外
//原始值使用 全等运算符（===）比较。
//对象的 原型 也使用 全等运算符 比较
assert.deepStrictEqual(2,4);

// assert.doesNotThrow
// 第一个参数是function,第三个参数和第二个参数比较类型
// 如果错误类型不相同，或 error 参数是 undefined，则错误会被抛回给调用者。
assert.doesNotThrow(function () {
    console.log(1);
},TypeError,'aaaa');

// 判断参数1和参数2是否相等 判断用的是==,不相等抛出AssertionError: 1 == 2
assert.equal(1,2);

// assert.fail会在AssertionError抛出第三个参数
//  判断第三个参数是否是错误的，如果是错误的则抛出错误信息 　
// 如果第三个参数为正确的，那么抛出信息为第三个参数的错误信息。
assert.fail(1, 2, '错误信息', '<');
//
//
// 如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
assert.ifError(1);
// 测试是否不深度相等。 与 assert.deepEqual() 相反。
assert.notDeepEqual(1, 2);
//
// 测试是否不深度全等。 与 assert.deepStrictEqual() 相反。
assert.notDeepStrictEqual(1,2);
//
//
//
// 抛出AssertionError: 2 !== 2
// 使用不等运算符（!=）测试是否不相等。
assert.notEqual(2,3);
assert.notStrictEqual(2,3);
//
// 括号里的值要是true不提示,如果为false就会提示参数2
// AssertionError: aaa
assert.ok(0,'aaa');
//
// 使用全等运算符（===）测试是否全等。
assert.strictEqual(1,2);
//
//
//
// assert.throws(参数1:一定要是个函数, 这里面要写一个正则, 写句话,写什么都行)
// 第二个参数可以是构造函数、正则表达式、或自定义的验证函数
// 如果指定了 第三个参数，则当 block 不抛出错误时，
// 第三个参数 会作为 AssertionError 的错误信息
assert.throws(function () {
 console.log(1);
 },/错了/,'aaaa');
