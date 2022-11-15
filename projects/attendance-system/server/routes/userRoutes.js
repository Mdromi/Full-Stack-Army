const router = require('express').Router();
const userController = require('../controller/userController')
/**
 * Get user by id or email
*/
router.get('/:userId', userController.getUserById);

/**
  * update user by id
  * @method PUT
*/
router.put('/:userId', userController.putUserById);
 
/**
  * update user by id
  * @method PATCH
*/
router.patch('/:userId', userController.patchUserById);
 
/**
  * Delete user by id
*/
router.delete('/:userId', userController.deleteUserById);


/**
 * Create new user
*/
router.post('/', userController.postUser);

/**
 * Get all users, include
 * - filter
 * - sort
 * - pagination
 * - select properties
 * @method Get
 * @route api/v1/users?sort["by","name"]
 * @visibility private
 */

router.get('/', userController.getUsers);

module.exports = router;