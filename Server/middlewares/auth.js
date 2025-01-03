import jwt from "jsonwebtoken";

/**
 * using users id to add an entry to cart.
 * Token generated is being used for authentication.
 */

const authenticationMiddleware = async(req, res, next)=>{
    const token = req.headers;
    if(!token){
        return res.json({success: false, message: "Not Authorized"})
    }
    try {
        const verify_token = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = verify_token.id;
    } catch (error) {
        
    }
}

export default authenticationMiddleware;