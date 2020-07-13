import { Router } from 'express';
import Seed from './helloWorld';

const router = Router();
router.use('/seed', Seed);

export default router;
