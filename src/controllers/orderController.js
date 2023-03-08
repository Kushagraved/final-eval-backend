const { getOrdersByUserService } = require('../services/orderServices');

const getOrdersByUser = async (req, res) => {
  try {
    const {userId}=req.body;
    const orders=await getOrdersByUserService(userId);
    res.status(200).json({
      orders
    });
 
  } catch (error) {
    console.log(error);
  }
};

module.exports={
  getOrdersByUser
};