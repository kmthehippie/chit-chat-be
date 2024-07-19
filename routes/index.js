const express = require("express")
const router = express.Router()


//TODO: Create verifyJWT 
//** Set / Routes */

//TODO: user_controller.post_login
router.post("/login",)

//TODO: user_controller.post_register
router.post("/register")

//TODO: index_controller.get_home
router.get("/home")
//* Send back data for all the chat rooms that has unread messages.
//* If total number of unread message chatrooms don't exceed 10, send back the most recently updated chatrooms. (Up to total 10. So, 10-unreadmsgchatrooms = fetch the leftover chats.)
//* I need scroll down at front end to trigger continue show more chatrooms in the order that they were last updated.
//* Send back the current number of friend request pending for this user.


//TODO: user_controller.post_friend_request
//* create a new friend request between 2 people.

//TODO: user_controller.patch_friend_request/:requestId
//* if friend request = accept, then update from pending to accept and add to friends list for both parties

//TODO: user_controller.delete_friend/:friendId
//* If user decides to delete friend, then update from accept to decline and remove both from each other's friend list

//TODO: user_controller.get_friend_list
//const getFriends = async (userId, page = 1, limit = 20) => {
  const skip = (page - 1) * limit;
  return Friend.find({ user: userId })
    .skip(skip)
    .limit(limit)
    .populate('friend', 'username email');
};