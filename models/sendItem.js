import mongoose from "mongoose";

const { Schema } = mongoose;
const sendSchema = new Schema({
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

const Send = mongoose.model("Send", sendSchema);
export default Send;