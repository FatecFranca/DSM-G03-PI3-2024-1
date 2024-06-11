import { Router } from 'express';
import carrinhoController from '../controllers/carrinho.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/adicionar', authMiddleware, carrinhoController.adicionarItem);

export default router;
