const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  likes: { type: Number, default: 0 },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: [
    {
      type: String,
    },
  ],
  thumbnail: {
    type: String, // This will store the URL or path of the image
  },
});

tutorialSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("Tutorial", tutorialSchema);
