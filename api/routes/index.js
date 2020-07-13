import { Router } from 'express';
import Version from './versionRoutes';
import Seeds from './seedRoutes';

const router = Router();
router.use('/version', Version);
router.use('/seed', Seeds);
export default router;
