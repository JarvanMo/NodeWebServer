const hello = require('./hello');

var s = 'Michael';

hello.greet(s);
hello.readFile(function callback(err, data) {
    if (err) {
        console.log('read file error');
    } else {
        console.log(data);
    }
});

hello.readFile((err, data) => {
    if (err) {
        console.log('read file error');
    } else {
        console.log(data);
    }
}); //s
// hello.goodbye(s);



module.exports = {
    greet: greet,
    hi: hi,
    goodbye: goodbye,
    readFile: readFile
};