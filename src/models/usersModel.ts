import { Pool, ResultSetHeader } from 'mysql2/promise';

import Iusers from '../interface/usersInterface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async registerUsers(users: Iusers): Promise<Iusers> {
    const { username, vocation, level, password } = users;
    const [rows] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const { insertId } = rows;
    return { id: insertId, username, vocation, level, password };
  }
}