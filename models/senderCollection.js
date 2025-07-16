import mongoose from "mongoose";

const { Schema } = mongoose;
const sendCollectionSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  code: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const SendCollection = mongoose.model("SendCollection", sendCollectionSchema);
export default SendCollection;