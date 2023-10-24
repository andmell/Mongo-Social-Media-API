const { Schema, model } = require("mongoose");
const dayjs = require("dayjs");
const reactionSchema = require('./Reactions')

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema]
});

thoughtSchema.virtual("formattedCreatedAt").get(function () {
  return dayjs(this.createdAt).format("MM/DD/YY");
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;