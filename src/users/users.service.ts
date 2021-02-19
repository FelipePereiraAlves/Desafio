import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Result} from '../utils/result.model';

export type User = any;

@Injectable()
export class UsersService {

  constructor(
    //@InjectModel('Profile') private readonly ProfileModel: Model<any>
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  private readonly users = [
    //Resgatar usuario do banco de novo... Usuarios mocado para teste de API Gateway
    {
      userId: 1,
      username: 'test',
      password: '123456789',
    },
    {
      userId: 2,
      username: 'test2',
      password: '123456789',
    }
  ];

}
