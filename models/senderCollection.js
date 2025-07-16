import mongoose from "mongoose";

const { Schema } = mongoose;
const sendCollectionSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const SendCollection = mongoose.model("SendCollection", sendCollectionSchema);
export default SendCollection;