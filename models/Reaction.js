const { Schema } = require('mongoose');

reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: () => new Date(+new Date())
        }
    },
    {
        toJSON: {
            getters: true
        }
    });

module.exports = reactionSchema;