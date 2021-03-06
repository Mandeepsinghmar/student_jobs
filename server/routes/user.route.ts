import express from 'express';
import { loginController, registerController, confirmUser, resendEmail, forgotPassword, resetPassword, updateController } from '../controllers/auth.controller';
import { validLogin, validSignUp, forgotPasswordValidator, resetPasswordValidator } from '../helpers/valid';
import checkTokenExpiry from '../middleware/checkTokenExpiry';

const router = express.Router();

router.post('/login', validLogin, loginController);
router.post('/register', validSignUp, registerController);

router.get('/confirm-account/:token', confirmUser);
router.get('/resend-email', resendEmail);
router.patch('/forgot-password', forgotPasswordValidator, forgotPassword);
router.patch('/reset-password/:token', resetPasswordValidator, resetPassword);

router.patch('/update-user', checkTokenExpiry, updateController);

export default router;
