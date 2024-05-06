
async function auth(req,res,next){
    try{
        // חילוץ מהבקשה >> Autherization Bearer
        // בדיקת תקינות טוקן
        // בדיקה מול הדאטה-בייס
            req.body.user={_id:"6613ba07b71ad0460cfa5c53"}
            next()
    }
    catch{
        res.sendStatus(401);
    }
}

module.exports = {auth}