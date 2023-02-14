import { Request, Response } from 'express';
import UsersService from '../services/usersService';

export default class UsersController {
  public service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  public registerUsers = async (req: Request, res: Response) => {
    const users = req.body;
    const usersCreated = await this.service.registerUsers(users);
    res.status(201).json(usersCreated);
  };
}