import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AccidentModule } from './accident/accident.module';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', //127.0.0.1:62961
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'desafio',
      entities: [__dirname + '/**/*.entities{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    ProfileModule,
    VehicleModule,
    AccidentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
