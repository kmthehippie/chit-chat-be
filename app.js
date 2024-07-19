const express = require("express");
const createError = require("http-errors");
const RateLimit = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
//const corsCreds = require()
//const allowedOrigins = require()
const path = require("path");

//TODO: Instantiate Routes

//** Initialize Express */
const app = express();

//** Setup Limiter*/
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, //1 minute
  max: 20,
});

//TODO: Handle options credential check before CORS

//TODO: Serve Static Files from React App
// app.use(express.static(path.join(__dirname, '/dist')))

//TODO: CORS setup
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not Allowed By CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
// };

//** App Uses Middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(limiter);
app.use(compression());
//TODO: app.use(cors(corsOptions))

//** Disable X Powered By Header */
app.disable("x-powered-by");

//TODO: App Uses Routes

//** Catch 404 and forward to error handler */
app.use(function (req, res, next) {
  next(createError(404));
});

//** Other Error handler */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
