const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    username: { type: string, required: true },
    description: { type: string, required: true },
    duration: { typenumber, required: true },
    data: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

// compile model from schema
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
