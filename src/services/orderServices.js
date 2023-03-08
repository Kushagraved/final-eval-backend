const {Order} = require('../../database/models');

const getOrdersByUserService=async(userId)=>{
  const orders=await Order.findAll({
    where:{
      user_id:userId
    }
  });
  return orders;
};

module.exports={
  getOrdersByUserService
};