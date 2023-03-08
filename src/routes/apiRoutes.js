const express=require('express');
const router=express.Router();

const orderRoutes=require('./orderRoutes');
const userRoutes=require('./userRoutes');

router.use('/orders',orderRoutes);
router.use('/users',userRoutes);

module.exports=router;

