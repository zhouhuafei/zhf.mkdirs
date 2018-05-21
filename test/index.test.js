const obj = require('../dist/index.min');
const mkdirs = obj.mkdirs;
const mkdirsSync = obj.mkdirsSync;

test(`创建多级目录`, () => {
    /*
    mkdirs('', function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('异步创建成功1');
        }
    });
    */
    mkdirs('./logs/aa1/bb1/cc1', function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('异步创建成功2');
        }
    });
    /*
    const errorInfo1 = mkdirsSync('');
    if (errorInfo1) {
        console.log(errorInfo1);
    } else {
        console.log('同步创建成功1');
    }
    */
    const errorInfo2 = mkdirsSync('./logs/aa2/bb2/cc2');
    if (errorInfo2) {
        console.log(errorInfo2);
    } else {
        console.log('同步创建成功2');
    }
    expect(true).toEqual(true);
});
