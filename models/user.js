const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    points: { type: Number, default: 0 },
    activities: [
      {
        name: String,
        points: Number,
        completed: { type: Boolean, default: false },
        dateCompleted: Date,
      },
    ],
    milestones: [
      {
        name: String,
        rewardPoints: Number,
        achieved: { type: Boolean, default: false },
        dateAchieved: Date,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
