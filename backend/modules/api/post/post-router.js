import Router from 'express'
import PostController from './post-controller.js';
import {authMiddleware} from '../../../middlewaree/auth-middleware.js';

const postRouter = new Router()

postRouter.post('/', PostController.create)
postRouter.get('/', authMiddleware, PostController.getAll)
postRouter.get('/:id', PostController.getOne)
postRouter.put('/', PostController.update)
postRouter.delete('/:id', PostController.delete)

export default postRouter;
