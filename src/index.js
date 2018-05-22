const fs = require('fs');
const path = require('path');

// 创建多级目录异步
function mkdirs(dirname = '', callback) {
    if (dirname === '') {
        callback(new Error('路径参数不存在(Path parameters do not exist)'), null);
        return;
    }
    fs.stat(dirname, function (error) {
        if (error) { // 文件夹不存在，则创建文件夹
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
            });
        } else { // 文件夹存在，报错
            callback(new Error('目录已经存在(Directory already exists)'), null);
        }
    });
}

// 创建多级目录同步
function mkdirsSync(dirname) {
    if (dirname === '') {
        return new Error('路径参数不存在(Path parameters do not exist)');
    }
    if (fs.existsSync(dirname)) {
        return new Error('目录已经存在(Directory already exists)');
    }
    if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
    }
}

module.exports.mkdirs = mkdirs;
module.exports.mkdirsSync = mkdirsSync;
