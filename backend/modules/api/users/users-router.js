import Router from 'express'
import {authMiddleware} from '../../../middlewaree/auth-middleware.js';
import UserController from './users-controller.js'

const usersRouter = new Router()

usersRouter.get('/', authMiddleware, UserController.getAll)
usersRouter.get('/profile', authMiddleware, UserController.getUserProfile)
usersRouter.get('/profiles', authMiddleware, UserController.getUsersProfile)

export default usersRouter;
