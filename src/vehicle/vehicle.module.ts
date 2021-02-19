import { Module } from '@nestjs/common';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';
import { ProfileModule } from '../profile/profile.module';
import { ProfileService } from '../profile/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/Vehicle.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    ProfileModule
  ],
  controllers: [VehicleController],
  providers: [
    VehicleService,
    ProfileService
  ],
  exports: [
    TypeOrmModule.forFeature([Vehicle]),
  ]
})
export class VehicleModule {}
