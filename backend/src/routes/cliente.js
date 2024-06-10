import { Router } from 'express';
import controller from '../controllers/cliente.js';
import authMiddleware from '../middlewares/authMiddleware.js';
const router = Router();

router.post('/login', controller.login);
router.post('/', controller.create);

// Usar o middleware de autenticação nas rotas que precisam ser protegidas
router.get('/', authMiddleware, controller.retrieveAll);
router.get('/:id', authMiddleware, controller.retrieveOne);
router.put('/:id', authMiddleware, controller.update);
router.delete('/:id', authMiddleware, controller.delete);

export default router;
