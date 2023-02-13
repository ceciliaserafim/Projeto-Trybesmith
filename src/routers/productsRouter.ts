import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();

const productsController = new ProductsController();
router.post('/', productsController.registerProducts.bind(productsController));

export default router;