const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  content: { type: String, required: true },
  image: { type: String },
  date: { type: Date, default: Date.now },
}, { versionKey: false, timestamps: true });

module.exports = mongoose.model("Post", PostSchema);
