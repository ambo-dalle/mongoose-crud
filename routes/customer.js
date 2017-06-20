const express = require('express')
const router = express.Router();
var CustomerControl= require('../controller/customer_controller')

router.get('/', CustomerControl.findAllCustomer);
router.get('/:id', CustomerControl.findOneCustomer);
router.post('/', CustomerControl.InsertCustomer)
router.put('/:id', CustomerControl.updateCustomer)
router.delete('/:id', CustomerControl.deleteCustomer)

module.exports = router;
