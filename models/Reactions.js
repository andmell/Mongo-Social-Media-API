const {Schema, model} = require('mongoose');
const dayjs = require("dayjs");
const Mongoose = require('mongoose');
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Mongoose.Types.ObjectId,
            default: new Mongoose.Types.ObjectId,
        },

        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now,

        }
    }
)

reactionSchema.virtual("formattedCreatedAt").get(function () {
    return dayjs(this.createdAt).format("MM/DD/YY");
  });

  module.exports = reactionSchema