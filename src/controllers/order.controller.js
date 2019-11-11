//create an order


exports.createOrder = (req, res) => {
    const orderAmount = req.body.amount;
    const orderItems = req.body.orders; // food items ids i.e., [121, 123, 124 ...]
    const orderedAt = req.body.orderAt;
    const modeOfPayment = req.body.paymentMode;
    // TODO save all the oder details in database

    // if succesfully save you will return a message
}


exports.cancelOrder = (req, res) => {
    const orderId = req.body.orderId;

    // TODO delete order 

}