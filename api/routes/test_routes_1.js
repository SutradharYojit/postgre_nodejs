const express = require('express');
const router=express.Router();
const pgadmin=require('../connection/connection')
const clientCtrl = require('../controller/test_ctrl_1')

router.get('/',clientCtrl.getData)

router.get('/:id', clientCtrl.getById)

router.post('/', clientCtrl.userPost)


pgadmin.client.connect();

module.exports = router