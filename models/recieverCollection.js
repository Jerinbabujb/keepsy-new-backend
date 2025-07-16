import mongoose from "mongoose";

const { Schema } = mongoose;
const recieveCollectionSchema = new Schema({
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

const RecieveCollection = mongoose.model("RecieverCollection", recieveCollectionSchema);
export default RecieveCollection;