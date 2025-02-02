import express from 'express'
import { getUserProfile, signin, signup } from '../controller/user.js'
import { auth } from '../middleware/index.js'
const Router = express.Router()

Router.post('/signup', signup)
Router.post('/signin', signin)
Router.get('/profile', auth, getUserProfile)

export default Router