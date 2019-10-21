module.exports = async function (context, req, productDocument) {
    
    if (req.query.productId) {
        if(productDocument.length == 0) {
            context.res = {
                status: 404
            };
            return
        }
        
        const {productId, productName, productDescription, timestamp} = productDocument[0];
        context.res = {

            body: {
                "productId": productId,
                "productName": productName,
                "productDescription": productDescription,
                "timestamp": timestamp
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};