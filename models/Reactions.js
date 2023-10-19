const {Schema, model} = require('mongoose');
const dayjs = require("dayjs");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.ObjectId,
            default: new Schema.ObjectId,
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