const express = require("express");
const router = express.Router();

//TODO: chat_controller.post_chatroom
router.post("/new_chatroom")
//* Create a new chat room. Must include, chat name, friends (users) and chat group image. 
//* If no chat group image, the default should be set 
//* This new chatroom is ALWAYS GROUP CHAT

//TODO: chat_controller.get_chatroom
router.