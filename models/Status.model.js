const mongoose = require("mongoose");

const statusSchema = mongoose.Schema({
  statuss: String,
});

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;
