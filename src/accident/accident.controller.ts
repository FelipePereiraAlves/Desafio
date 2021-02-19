import {Body, Controller, Post} from '@nestjs/common';
import {Result} from '../utils/result.model';
import {AccidentService} from './accident.service';
import {AccidentDto} from './model-dto/accident.dto';

@Controller('api/v1/accident')
export class AccidentController {

  constructor( private readonly accidentService: AccidentService ) {}

  @Post('create')
  async createAccident(@Body() accident: any): Promise<Result> {
    return this.accidentService.createAccident(accident);
  }
}
