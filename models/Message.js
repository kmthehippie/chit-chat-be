const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "User" },
    chatroom: { type: Schema.Types.ObjectId, ref: "ChatRoom" },
    content: { type: String, required: true },
    recipients: [{ type: Schema.Types.ObjectId, ref: "User" }],
    readBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
