# 创建多级目录
```
const mkdirs = require('zhf.mkdirs');

// 异步
mkdirs('', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('异步创建成功1');
    }
});
mkdirs('./logs/aa1/bb1/cc1', function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('异步创建成功2');
    }
});

// 路径不存在则创建，路径存在则不做任何操作。参数为空，或者路径已存在会有error信息。个人觉的error信息可以不必理会。因为如果路径存在正是我想要的，如果参数为空则是在当前目录创建，都不会导致bug。
mkdirs('./logs/aa3/bb3/cc3', function (error) {});

// 同步
const errorInfo1 = mkdirsSync('');
if (errorInfo1 === true) {
    console.log('同步创建成功1');
} else {
    console.log(errorInfo1);
}
const errorInfo2 = mkdirsSync('./logs/aa2/bb2/cc2');
if (errorInfo2 === true) {
    console.log('同步创建成功2');
} else {
    console.log(errorInfo2);
}
```
