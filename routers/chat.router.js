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


//  router.get('/inbox',___ ,  async (req,res)=>{})
//  router.get('/inbox/read',___ ,  async (req,res)=>{})
//  router.get('/sent',___ ,  async (req,res)=>{})
//  router.get('/favorite',___ ,  async (req,res)=>{})


module.exports = router