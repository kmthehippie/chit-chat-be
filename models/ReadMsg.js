const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//** Last read message for each user in each chat room */
const ReadMsgSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  chatroom: { type: Schema.Types.ObjectId, ref: "ChatRoom", required: true },
  lastReadMessage: { type: Schema.Types.ObjectId, ref: "Message" },
  unreadCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("ReadMsg", ReadMsgSchema);
