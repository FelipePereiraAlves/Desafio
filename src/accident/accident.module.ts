import { Module } from '@nestjs/common';
import { AccidentService } from './accident.service';
import { AccidentController } from './accident.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accident } from './entities/accident.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Accident]),
  ],
  providers: [AccidentService],
  controllers: [AccidentController]
})
export class AccidentModule {}
