const express = require('express'),
router = express.Router();
let chatService= require('../services/chat.service')

router.get('/', async (req,res)=>{

    try{
        let result =await chatService.getInbox(req.body.user._id)
        res.send(result)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = router