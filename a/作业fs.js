var fs = require('fs');

//1.异步的打开文件
//参数1 路径
//参数2 异步的打开文件 'r' 'r+' 'rs+'
//参数3 设置文件模式
//参数4 回调函数 参数(二人fd)
fs.open('1.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
});

//2.改变指定的路径所指向的文件的文件时间戳
//参数1 路径
//参数2 修改时间
//参数3 访问时间
//参数4 回调函数 传递一个异常参数二err
fs.utimes('1.txt', new Date(), new Date(), function(err){
    if(err){
        throw err;
    }
    console.log('time update');

})

//3.对文件进行监视，并且在监视到文件被修改时执行处理
//参数1 文件路径
//参数2 可省略 options 对象可能包含一个名为 persistent 的布尔值，
// 表明当文件正在被监视时，进程是否应该继续运行。 options 对象可以
// 指定一个 interval 属性，表示目标应该每隔多少毫秒被轮询。 默认值
// 为 { persistent: true, interval: 5007 }。
//参数3 回调函数 curr为一个fs.Stat对象，当前的状态对象,prev,一个
// fs.Stat对象，表示以前对象

fs.watchFile('1.txt', {interval: 20}, function(curr, prev) {
   if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
        console.log('文件有修改');
    }
});
//4.取消监听事件
//参数1 路径
//参数2 取消监听事件
var listener = function (curr, prev) {
    console.log('我是监视函数')
}
fs.unwatchFile(__dirname + '/1.txt', listener);

//5.复制文件夹
//参数1 源目录或文件的路径
//参数2 转换后的目录的路径
//参数3 回调函数
fs.link('1.txt','2.txt',function () {
    console.log(123)
})