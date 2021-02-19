import {Body, Controller, Delete, Get, Param, Patch, Post, Put, UseInterceptors} from '@nestjs/common';
import {Result} from '../utils/result.model';
import {VehicleService} from './vehicle.service';
import {VehicleDto} from './model-dto/vehicle.dto';
import {ValidatorInterceptor} from '../interceptors/validator.interceptor';
import {VehicleContracts} from './Vehicle.contracts';

@Controller('api/v1/vehicle')
export class VehicleController {

  constructor( private readonly vehicleService: VehicleService ) {}

  @Get(':board')
  async queryVehicle(@Param('board')  board: string): Promise<Result> {
    return this.vehicleService.queryVehicle(board);
  }

  @Post('create')
  @UseInterceptors(new ValidatorInterceptor(new VehicleContracts()))
  async createVehicle(@Body() vehicle: VehicleDto): Promise<Result> {
    return this.vehicleService.createVehicle(vehicle);
  }

  @Put(':board')
  @UseInterceptors(new ValidatorInterceptor(new VehicleContracts()))
  async updateVehicle(@Param('board') board: string, @Body() vehicle: VehicleDto): Promise<Result> {
    return this.vehicleService.updateVehicle(vehicle, board);
  }

  @Delete(':board')
  async deleteVehicle(@Param('board') board: string): Promise<Result> {
    return this.vehicleService.deleteVehicle(board);
  }


}
