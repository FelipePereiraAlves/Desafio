import { Injectable } from '@nestjs/common';
import {Result} from '../utils/result.model';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Accident} from './entities/accident.entity';
import {Facilitadores} from '../utils/facilitadores';

@Injectable()
export class AccidentService {

  facilitadores = new Facilitadores();

  constructor(
    @InjectRepository(Accident) private readonly repository: Repository<Accident>
  ) {}

  async createAccident(accident: any): Promise<Result> {
    const guid = this.facilitadores.guid();


    const res = await this.repository.find({id: guid})

    return new Result('Accidente criado com sucesso', true, null, null );
    //const res = await this.repository.create();
    //this.repository.save(res);
    //await this.repository.save(accident);
    return
  }

  /*async createAccident(accident: any): Promise<Result> {
    const thirdDocument = [];
    const thirdsVehicle = [];

    for ( let i = 0; i < accident.thirds.length; i++ ) {
      thirdDocument.push({idThird: accident.thirds[i]._id});
    }

    for ( let i = 0; i < accident.thirdsVehicle.length; i++ ) {
      thirdsVehicle.push({idThirdsVehicle: accident.thirdsVehicle[i]._id});
    }

    const obj = {
      idClient:         accident.client,
      idVehicleClient:  accident.vehicleCient,
      thirds:           thirdDocument,
      thirdsVehicle:    thirdsVehicle
    }

    console.log(obj);
    return
  }*/
}
