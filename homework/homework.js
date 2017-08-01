var arr = [1,2,3,4]
//1.forEach 遍历循环等同于传统的for循环
//参数都是function类型 默认有传参
//回调支持三个参数 第一个是遍历的数组的内容 第二个是数组的索引 第三个是数组本身
// arr.forEach(console.log);
// arr.forEach(function (value,index,array) {
//     console.log(value)
//     console.log(index)
//     console.log(array)
// })
//数组求和
var sum = 0;
arr.forEach(function (item,index,array) {
    sum += item;
})
// console.log(sum)

//2.map 映射
//基本用法跟forEach类似
//callback 需要有返回值 如果没有返回undefined
// arr.map(function (value,index,array) {
//     console.log(value);
// })
var arr1 = [1,2,3,4]
var array = arr1.map(function (item) {
    return item * item
})
// console.log(array);
var array4 = arr1.map(function () {  })
// console.log(array4);
var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
];

var emails = users.map(function (user) { return user.email; });

// console.log(emails.join(", "));

//3.filter 过滤 筛选
//用法跟map相似
//callback函数返回值true 或者false
//0 不返回
//返回值是 ==true/false 就可以了
//不一定是 ===true/false

var arr3= [0,1,2,3,4]
var array3 = arr3.filter(function (item) {
    return item;
})
// console.log(array3);

//4.some 是否某些项合乎条件false返回boolean值
//存在满足条件的就返回true
//所有的都不满足就返回

var array4 = [5,8,3,10]

var q = array4.some(function (t) {
    return t > 11;
})
// console.log(q);
if(q){
    console.log("7")
}else{
    console.log('77')
}

//5.every 同样返回Boolean值
//所有的都满足条件返回true
//有一个不满足返回false
var array5 = [1,2,3,4,5]
var z = array5.every(function (t) {
    return t > 0
})
// console.log(z);

//6.indexOf 返回整数索引值 如果没有匹配返回-1
//参数 fromIndex 可选 表示从这个位置开始搜索 若没写或格式不合要求 使用默认值0
var array6= [1,2,3,4,5,6,7,8,89]
console.log(array6.indexOf(5,5));

//7.lastIndexOf 是从字符串的末尾开始查找
//fromIndex 的默认值是arr.length-1

//8.reduce
//callback 接受四个参数 之前值 当前值 索引值 数组本身
//initiaValue可选 初始值 若指定 当作最初使用的previous值
//没指定 数组的第一个参数作为previous初始值 current往后排一位
// 相比少一次Initivalue值少一次迭代

// var sum = [1,2,3,4].reduce(function (previous,current,index,array) {
//     return current
// })
// console.log(sum);
// var array8 = [1,2,3,4]
// var result = array8.reduce(function (previous,currnet,index,array) {
//     return array
// },-1)
// console.log(result);

var arr8 = [[1,2],[3,4],[4,5]]
var aaa = arr8.reduce(function (previous,a) {
    return previous.concat(a);
})
console.log(aaa);

//9 reduceRight 跟reduce用法类似
//差异在于 reduceR一个话题从数组末尾开始实现