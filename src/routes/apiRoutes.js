const express = require('express');
const router = express.Router();

const contentTypeRoutes = require('./contentTypeRoutes');
const collectionRoutes = require('./collectionRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);


router.use('/content-types', contentTypeRoutes);
router.use('/collections', collectionRoutes);



module.exports = router;

