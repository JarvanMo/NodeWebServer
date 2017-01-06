const path = require('path')
const mime = require('mime')
const fs = require('fs')


function staticFiles(uri, dir) {

    //uri /static
    //dir ~/WebServer/mvc/static
    return async(ctx, next) => {

        let rpath = ctx.request.path


        //rpath 

        if (rpath.startWith(uri)) {

            let fp = path.join(dir, rpath.substring(uri.length))

            if (await fs.exists(fs)) {

                ctx.response.type = mime.lookup(rpath)

                ctx.response.body = await fs.readFile(fp)


            } else {
                ctx.response.status = 404
            }

        } else {
            await next()
        }


    }
}


module.exports = staticFiles