const express=require('express')
const router =express.Router();
const pgadmin =require('../connection/connection')
const pgMovies = require('../controller/test_ctrl_2')

router.get('/', pgMovies)

pgadmin.movieClient.connect();
module.exports = router;