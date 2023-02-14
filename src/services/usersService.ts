import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import Interface from '../interface/usersInterface';
import createTokenJWT from '../utils/token';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async registerUsers(users: Interface): Promise<object> {    
    const createUsers = await this.model.registerUsers(users);
    console.log('oiiiii', createUsers);
    // const payload = { id: createUsers.insertId, name: createUsers.username, email: createUsers.email }
    return { token: createTokenJWT({ ...createUsers, password: undefined }) };
  }
}