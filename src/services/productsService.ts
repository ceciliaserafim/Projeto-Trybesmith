import connection from '../models/connection';
import ProductsModel from '../models/productsModel';
import Interface from '../interface/productsInterface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async registerProducts(products: Interface): Promise<Interface> {    
    const createProducts = await this.model.registerProducts(products);
    return createProducts;
  }

  public async getAll(): Promise<Interface[]> {
    const getAllProducts = await this.model.getAll();
    return getAllProducts;
  }
}