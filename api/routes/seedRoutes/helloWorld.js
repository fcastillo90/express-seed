import { Router } from 'express';
import seedControllers from '../../controllers/seedControllers/helloWorld';

const router = Router();
router.get('/', seedControllers.getHelloWorld);

export default router;
