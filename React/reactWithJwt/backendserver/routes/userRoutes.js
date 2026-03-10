const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController.js');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.route('/profile')
    .get(protect, getUserProfile);
    //.put(protect, updateUserProfile)

//router.delete('/:id', protect, deleteUser);

module.exports = router;