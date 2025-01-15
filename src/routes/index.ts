import { Router } from 'express';
import welcomeRoutes from './welcomeRoutes';

const router = Router();
router.use('/welcome', welcomeRoutes);


export default router;