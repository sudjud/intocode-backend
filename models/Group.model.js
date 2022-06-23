const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = Schema({
  grade: Number,
  currentWeek: {
    type: Number,
    default: 1
  },
  finished: {
    type: Boolean,
    default: false
  },
})

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;//asd