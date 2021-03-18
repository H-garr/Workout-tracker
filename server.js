const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
  useNewUrlParser: true,
  useFindAndModify: false
})
.catch(err=> console.log(err));
// routes
app.use(require("./router/api.js"));
app.use(require("./router/html.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
