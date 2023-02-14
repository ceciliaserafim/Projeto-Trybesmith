import { Pool, ResultSetHeader } from 'mysql2/promise';

import Interface from '../interface/productsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async registerProducts(products: Interface): Promise<Interface> {
    const { name, amount } = products;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    // ResultSetHeader: ao passar essa interface como generic para connection.execute, você vai perceber que a linha que extrai o atributo insertId passa a ser compilável.  
    return { id: insertId, name, amount };
  }

  public async getAll(): Promise<Interface[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
    const [rows] = result;
    return rows as Interface[];
  }
}