const { Schema, model } = require('mongoose');
const userSchema = require('/User');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: //date getter
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

reactionSchema = new Schema(
    {
        reactionId: {
            type: //ObjectId,
            default: //new objectid
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
            default: Date.now,
            get: //date getter
        }
    },
    {
        toJSON: {
            getters: true
        }
    });

module.exports = Thought;

//This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.