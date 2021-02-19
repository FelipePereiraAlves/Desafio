import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {ProfileModule} from '../profile/profile.module';

@Module({
  imports: [ProfileModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
