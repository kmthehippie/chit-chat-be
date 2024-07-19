const express = require("express");
const router = express.Router();

//TODO: user_controller.get_profile
router.get("/profile");
//* Send back user's profile information to be displayed on profile page

//TODO: user_controller.patch_profile
router.patch("/profile");
//* Allow user to update their current profile.
