var path = require('path');
//路径拼接 join
var fullPath = path.join(__dirname,'B','A.jpg')
console.log(fullPath)
//2.resolve 从右往左 生成绝对路径
//当最终路径为绝对路径时 拼接终止
var full= path.resolve('/foo', '/bar', 'baz')

var fullPath = path.resolve('./a','./b','./c')
console.log(fullPath)