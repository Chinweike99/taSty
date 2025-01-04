import jwt from "jsonwebtoken";

/**
 * using users id to add an entry to cart.
 * Token generated is being used for authentication.
 */

const authenticationMiddleware = async(req, res, next)=>{
    // const token = req.headers;
    const token = req.headers.authorization?.split(" ")[1];
    console.log("Request Headers:", req.headers);
    if(!token){
        return res.json({success: false, message: "Not Authorized"})
    }
    try {
        const verify_token = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = verify_token.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// const authenticationMiddleware = async (req, res, next) => {
//     try {
//         console.log("Request Headers:", req.headers);
//         const token = req.headers.authorization?.split(" ")[1]; // Extract token
//         if (!token) {
//             return res.status(401).json({ success: false, message: "Token missing or invalid" });
//         }
        
//         const verify_token = jwt.verify(token, process.env.JWT_SECRET);
//         req.body.userId = verify_token.id; // Add userId to request
//         next(); // Proceed to next middleware
//     } catch (error) {
//         console.error("Error verifying token:", error.message);
//         res.status(401).json({ success: false, message: error.message });
//     }
// };


export default authenticationMiddleware;