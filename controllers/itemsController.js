import RecieveCollection from "../models/recieverCollection.js";
import SendCollection from "../models/senderCollection.js";
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

export const sendCollection=async(req,res)=>{
    const {address,phone,email}= req.body;
    try{
        if(!address||!phone||!email){
            res.json({success:false,message:"Please complete the form"})
        }
        const collectionForm= await SendCollection.create({
            address,
            phone,
            email
        })
        res.json({success:true,collectionForm,message:"data entered successfully"});
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}


export const recieverCollection=async(req,res)=>{
    const {address,phone,email}= req.body;
    try{
        if(!address||!phone||!email){
            res.json({success:false,message:"Please complete the form"})
        }
        const collectionForm= await RecieveCollection.create({
            address,
            phone,
            email
        })
        res.json({success:true,collectionForm,message:"data entered successfully"});
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}