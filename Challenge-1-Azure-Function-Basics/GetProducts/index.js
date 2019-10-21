module.exports = async function (context, req, productDocument) {
    context.log('JavaScript HTTP trigger function processed a request.')
    context.log(productDocument)
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: productDocument
    };
};