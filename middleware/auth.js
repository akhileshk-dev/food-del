import jwt from "jsonwebtoken";


const authMiddileware=async(req,res,next)=>{
const {token}=req.headers;
if(!token){
    return res.json({success:false,message:"Not Authorized Login Again"});
}
try {
    const token_decode=jwt.verify(token,process.env.JWT_SECRETS);
    req.body.userId=token_decode.id;
    next();
} catch (error) {
    res.json({success:false,message:"Error"});
}
}
export default authMiddileware;