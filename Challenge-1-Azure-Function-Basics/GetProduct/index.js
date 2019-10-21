module.exports = async function (context, req, productDocument) {
    context.log('JavaScript HTTP trigger function processed a request.')

    if (req.query.productId) {
        context.log(productDocument)
        let data = productDocument.filter(function(doc) {
            return doc.productId === req.query.productId;
        })

        if(data.length == 0) {
            context.res = {
                status: 404
            };
            return
        }

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: data
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};