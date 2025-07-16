import mongoose from "mongoose";

const { Schema } = mongoose;
const recieveCollectionSchema = new Schema({
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

const RecieveCollection = mongoose.model("RecieverCollection", recieveCollectionSchema);
export default RecieveCollection;