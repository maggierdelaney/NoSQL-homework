username
- string
- unique
- required
- trimmed
email
- string
- required
- unique
- must match valid email address (Mongoose matching validation)
thoughts
- array of _id values referencing Thought model (self reference)
friends
- array of _id values referencing User model (self reference)

Schema Settings

Create a virtual called friendCount that retrieves the length of the user's friends array field on query.