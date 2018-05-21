'use strict';

var fs = require('fs');
var path = require('path');

// 创建多级目录异步
function mkdirs(dirname, callback) {
    if (!dirname) {
        console.log('路径参数不存在(Path parameters do not exist)');
        return;
    }
    fs.stat(dirname, function (error) {
        if (error) {
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
            });
        } else {
            callback();
        }
    });
}

// 创建多级目录同步
function mkdirsSync(dirname) {
    if (!dirname) {
        console.log('路径参数不存在(Path parameters do not exist)');
        return;
    }
    if (fs.statSync(dirname) !== undefined) {
        // 返回undefined，表示文件夹存在，否则表示不存在
        if (mkdirsSync(path.dirname(dirname))) {
            //
            fs.mkdirSync(dirname);
            return true;
        }
    } else {
        return true;
    }
}

module.exports.mkdirs = mkdirs;
module.exports.mkdirsSync = mkdirsSync;