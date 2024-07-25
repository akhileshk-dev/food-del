import userModel from "../models/userModel.js";
// add items to user cart
const addToCart=async(req,res)=>{
try {
    let userData=await userModel.find({_id:req.body.userId});
    console.log(userData);
   let cartData=userData[0].cartData
    console.log(cartData);
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId]=1
    }else{
        cartData[req.body.itemId]+=1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});
    res.json({success:true,message:"Added To Cart"});
} catch (error) {
    res.json({succes:false,message:"Error"});
}

};
// remove item from user cart
const removeFromCart=async(req,res)=>{
    try {
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData .cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({succes:true,message:"Remove From Cart"});
    } catch (error) {
        res.json({succes:false,message:"Error"});
    }

};
// fetch user cart data
const getCart=async(req,res)=>{
try {
    let userData=await userModel.findById(req.body.userId);
    let cartData=await userData.cartData;
    console.log(cartData);
    res.json({success:true,cartData});
} catch (error) {
    res.json({succes:false,message:"Error"});
}
};
export {addToCart,removeFromCart,getCart}