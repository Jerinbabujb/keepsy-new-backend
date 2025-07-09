import Send from "../models/sendItem.js";




export const sendItem=async (req,res)=>{
    try{
        const {item,location,code} = req.body;
        if (!code) {
      return res.status(400).json({ success: false, message: "Code is required" });
    }
        const details= await Send.create({
            item,
            location,
            code
        })
        res.json({success:true,details})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}


export const recieveItem=async (req,res)=>{
    try{
       const {code}= req.body;
       const findItem= await Send.find(code);
       if(!findItem){
        return res.json({success:false,message:"Please check the code"})
       }
       res.json({success:true,findItem})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}