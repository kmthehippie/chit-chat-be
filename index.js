require("dotenv").config();
const port = process.env.PORT;
const app = require("./app");
const mongoose = require("mongoose");

//** Setup Mongoose */
mongoose.set("strictQuery", false);
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

//** Start listening on port */
app.listen(port, () => {
  console.log("Running on Port: " + port);
});
