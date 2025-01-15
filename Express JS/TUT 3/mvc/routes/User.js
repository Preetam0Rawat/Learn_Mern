const express = require("express")
const { createUser, getAllUsers, deleteUser, updateUser, getUserById } = require("../controller/User")
const router = express.Router()

//post request to create a user
router.post('/', createUser)

//get request to get all users in database
router.get('/', getAllUsers)

//get user by id
router.get('/:id', getUserById)

//delete user
router.delete('/:id', deleteUser)

//Update user
router.patch('/:id', updateUser)

module.exports = router