const jwt = require("jsonwebtoken");

module.exports = (req,res,next) => {
    const accessToken = req.headers['x-access-token'];
    if(accessToken){
        try {
            const decode = jwt.verify(accessToken, "academyonline2021aksd");
            req.body.userId = decode.userId;
            next();
        } catch (error) {
            return res.status(401).send({
                message: "invalid access token."
            })
        }
    }else{
        return res.status(400).send({
            message: "Access token not found."
        })
    }
    
}