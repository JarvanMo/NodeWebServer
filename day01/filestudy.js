const myFs = require('fs');
let file = './files/sample.txt';
module.exports = {
    read: read,
    append: append
}

function read(params) {
    myFs.readFile(file, 'utf-8', params);
}

function append(txt, callback) {

    // myFs.appendFile(file, txt, 'utf-8', callback);
    var ws2 = myFs.createWriteStream(file);
    console.log(myFs.exists);
    ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
    ws2.write(new Buffer('END.', 'utf-8'));
    ws2.end();
    callback(undefined);
}