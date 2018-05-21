const obj = require('../dist/index.min');
const mkdirs = obj.mkdirs;
const mkdirsSync = obj.mkdirsSync;

test(`创建多级目录`, () => {
    mkdirs('', function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('创建成功');
        }
    });
    mkdirs('./logs/aa1/bb1/cc1', function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('创建成功');
        }
    });
    // const fs = require('fs');
    // console.log(fs.mkdirSync('./logs/'));

    /*
    const errorInfo = mkdirsSync('./dist/aa2/bb2/cc2');
    if (errorInfo) {
        console.log(errorInfo);
    } else {
        console.log('创建成功');
    }
    */
    expect(true).toEqual(true);
});
