module.exports = async function (context) {
    
    // 以下の形式のドキュメントをCosmosDBに保存する。
    // {
    //     "productId": "75542e38-563f-436f-adeb-f426f1dabb5c",
    //     "productName": "Starfruit Explosion",
    //     "productDescription": "This starfruit ice cream is out of this world!",
    //     "timestamp": "2019-09-14 21:27:47Z"
    //   }
    var timeStamp = new Date().toISOString();

    context.bindings.productDocument = JSON.stringify({
        productId: context.bindings.myQueueItem.productId,
        productName: context.bindings.myQueueItem.productName,
        productDescription: context.bindings.myQueueItem.productDescription,
        timestamp: timeStamp,
      });

      context.done();
};