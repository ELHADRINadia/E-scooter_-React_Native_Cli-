const express = require('express');
const router = express.Router();




const {addScooter, getScooters , activateScooter, desactivateScooter} = require('../Controllers/scooterController');


router.route('/addScooter').post(addScooter);
router.route('/getScooter').get(getScooters);
router.route('/activateScooter/:id').get(activateScooter);
router.route('/desactivateScooter/:id').get(desactivateScooter);


module.exports = router;