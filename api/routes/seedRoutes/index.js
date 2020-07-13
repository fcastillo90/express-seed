import { Router } from 'express';
import HelloWorld from './helloWorld';

const router = Router();
router.use('/helloWorld', HelloWorld);

export default router;
