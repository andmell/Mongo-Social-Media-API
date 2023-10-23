const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:_id').get(getOneThought).put(updateThought).delete(deleteThought);

//add reaction routes to this page as well.

module.exports = router;