const express = require('express')
const router = express.Router();
var TransaktionControl= require('../controller/transaksi_controller')

router.get('/', TransaktionControl.getAllTransaksi);
router.get('/:id', TransaktionControl.getOneTransaksi);
router.post('/', TransaktionControl.insertTransaksi);
router.patch('/:id', TransaktionControl.updateTransaksi)
router.delete('/:id', TransaktionControl.deleteTransakti);
router.patch('/:id', TransaktionControl.addBooklist)

module.exports = router;
