import Router from 'express';
import {check} from 'express-validator';
import AuthController from './auth-controller.js';

export const authRouter = new Router()

authRouter.post('/registration', [
    check('username', 'Поле не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({min: 4, max: 10}),
], AuthController.registration)
authRouter.post('/login', AuthController.login)
