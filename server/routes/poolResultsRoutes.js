const router = require('express-promise-router')();
const { body, param } = require('express-validator/check');

const validationMiddleware = require('../validation/validationMiddleware');
const poolResultsController = require('../controllers/poolResultsController');

router.route('/')
    .post(
        [
            body('name')
                .exists().withMessage('Please enter your name')
                .isLength({min: 2}).withMessage('At least 2 symbols'),
            body('home_town').exists().withMessage('Please select you home town'),
            body('favorite_tools').custom(value => {
                if (!Array.isArray(value) || value.length === 0) {
                    throw new Error('Please select at least one tool')
                }
                return true;
            })
        ],
        validationMiddleware,
        poolResultsController.createPoolResult
    );

router.route('/')
    .get(
        poolResultsController.getPoolResults,
    );

module.exports = router;