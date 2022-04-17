const router = require('express').Router();
const companyRoutes = require('./company');

router.use('/api/company', companyRoutes);









module.exports = router;