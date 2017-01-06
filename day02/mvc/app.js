const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const app = new Koa();


const isProduction = process.env.NODE_ENV == 'production';


// log request URL:
app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);

    var
        start = new Date().getTime(),
        execTime;
    await next();

    execTime = new Date().getTime() - start;


    ctx.response.set('X-Response-Time', `${execTime}`);
});

if (!isProduction) {
    let staticFiles = require('./static-files')
    app.use(staticFiles('/static/', __dirname + '/static'))
}


// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));



// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(8080);
console.log('app started at port 8080...');