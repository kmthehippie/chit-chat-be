const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatRoomSchema = new Schema(
  {
    chatroomName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    groupAdmin: { type: Schema.Types.ObjectId, ref: "User" },
    latestMessage: { type: Schema.Types.ObjectId, ref: "Message" },
    messageCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatRoom", ChatRoomSchema);
