
async function auth(req,res,next){
    try{
            req.body.user={_id:"660d66c5f3e17a763868202e"}
            next()
    }
    catch{
        res.sendStatus(401);
    }
}

module.exports = {auth}