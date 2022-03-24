import Router from 'express';
import postRouter from './modules/api/post/post-router.js';
import usersRouter from './modules/api/users/users-router.js';

const router = new Router()
router.use('/posts', postRouter)
router.use('/friends', usersRouter)

export default router;
