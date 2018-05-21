const fs = require('fs');
const path = require('path');

// 创建多级目录异步
function mkdirs(dirname, callback) {
    if (!dirname) {
        console.log('路径参数不存在(Path parameters do not exist)');
        return;
    }
    fs.stat(dirname, function (error) {
        if (error) { // 文件夹不存在，则创建文件夹
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
            });
        } else { // 文件夹存在，报错
            callback(new Error('file already exists'), null);
        }
    });
}

// 创建多级目录同步
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

/*
function mkdirsSync(dirname) {
    if (!dirname) {
        console.log('路径参数不存在(Path parameters do not exist)');
        return;
    }
    if (fs.statSync(dirname) !== undefined) { // 文件夹不存在，则创建文件夹
        if (mkdirsSync(path.dirname(dirname)) === undefined) {
            fs.mkdirSync(dirname);
        }
    } else { // 文件夹存在
        return new Error('file already exists');
    }
}
*/

module.exports.mkdirs = mkdirs;
module.exports.mkdirsSync = mkdirsSync;
