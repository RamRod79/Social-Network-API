const router = require('express').Router();
const courseRoutes = require('./thought-routes');
const studentRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;