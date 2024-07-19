const express = require("express");
const router = express.Router();

//TODO: user_controller.get_friends_list
//* Need to query 4 friends at a time. when click view more, it request for more...
//? Need to give 2 friends suggestion. Randomly select people who are not this person's friend in the db and add them to the list.
router.get("/list");
// Use the auth id to find his friends list and propagate the user info necessary for friend.

//TODO: user_controller.post_friend_request
//* create a new friend request between 2 people.
router.post("/request");

//TODO: user_controller.patch_friend_request/:requestId
//* if friend request = accept, then update from pending to accept and add to friends list for both parties. then delete friend request whether it is accepted or declined.
//* if accepted, a chatroom (always NOT A GROUP CHAT) is created between the 2 friends
router.patch("/request/:requestId");

//TODO: user_controller.delete_friend/:friendId
//* If user decides to delete friend, then remove friend from the friend list (for both parties).
//* Remove chatroom.
router.delete("/:friendId");
