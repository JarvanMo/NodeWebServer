const Koa = require('koa');

const app = new Koa();


app.use(async(ctx, next) => {

    await next();

    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2</h1>';


});


app.listen(8080);

console.log('listening on port 8080');