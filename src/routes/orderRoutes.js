const express=require('express');
const { getOrdersByUser } = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const router=express.Router();


router.get('/',authMiddleware,getOrdersByUser);


module.exports=router;