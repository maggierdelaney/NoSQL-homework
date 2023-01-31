const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId/reactions').post(createReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

router 
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;