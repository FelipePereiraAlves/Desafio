import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { Result } from '../utils/result.model';
import {ProfileService} from '../profile/profile.service';
import {InjectRepository} from '@nestjs/typeorm';
import {Vehicle} from './entities/Vehicle.entity';
import {Repository} from 'typeorm';
import {VehicleDto} from './model-dto/vehicle.dto';
import {Facilitadores} from '../utils/facilitadores';

@Injectable()
export class VehicleService {

  facilitadores = new Facilitadores();

  constructor(
    @InjectRepository(Vehicle) private readonly repository: Repository<Vehicle>,
    private readonly profileService: ProfileService
  ) {}

  async createVehicle(vehicle: VehicleDto): Promise<Result> {
    if ( await this.repository.findOne({board: vehicle.board}))
      throw new HttpException(new Result('Veiculo já cadastrado', false, null, null), HttpStatus.FORBIDDEN);

    const profile = await this.profileService.queryProfileTest(vehicle.documentProfile.replace(/\D/g, ''))
    if ( !profile )
      throw new HttpException(new Result('Proprietario do veiculo não localizado', false, null, null), HttpStatus.FORBIDDEN);


    const obj = {
      idProfile: profile.data.id,
      via: vehicle.via ? vehicle.via : null,
      renavanCode: vehicle.renavanCode ? vehicle.renavanCode : null,
      rntrc: vehicle.rntrc ? vehicle.rntrc : null,
      exercise: vehicle.exercise ? vehicle.exercise : null,
      board: vehicle.board,
      chassi: vehicle.chassi ? vehicle.chassi : null,
      kindSpecies: vehicle.kindSpecies ? vehicle.kindSpecies : null,
      vehicleFuel: vehicle.vehicleFuel ? vehicle.vehicleFuel : null,
      brandModel: vehicle.brandModel ? vehicle.brandModel : null,
      yearOfManufacture: vehicle.yearOfManufacture ? vehicle.yearOfManufacture : null,
      modelYear: vehicle.modelYear ? vehicle.modelYear : null,
      capPotCil: vehicle.capPotCil ? vehicle.capPotCil : null,
      category: vehicle.category ? vehicle. category : null,
      predominatColor: vehicle.predominatColor ? vehicle.predominatColor : null
    };

    const res = await this.repository.save(obj);
    return new Result('Veiculo criado com sucesso', true, false, res);
  }

  async updateVehicle(vehicle: VehicleDto, board: string): Promise<Result> {
    console.log(board)
    const vehicleUpdate = await this.repository.findOne({'board': board, isActivate: true});
    console.log(vehicleUpdate);
    if ( !vehicleUpdate)
      throw new HttpException(new Result('Veiculo não localizado', false, null, null), HttpStatus.FORBIDDEN);

    const profile = await this.profileService.queryProfileTest(vehicle.documentProfile.replace(/\D/g, ''));
    if ( !profile )
      throw new HttpException(new Result('Proprietario do veiculo não localizado', false, null, null), HttpStatus.FORBIDDEN);

    const obj = {
      idProfile: profile.data.id,
      via: vehicle.via ? vehicle.via : vehicleUpdate.via,
      renavanCode: vehicle.renavanCode ? vehicle.renavanCode : vehicleUpdate.renavanCode,
      rntrc: vehicle.rntrc ? vehicle.rntrc : vehicleUpdate.rntrc,
      exercise: vehicle.exercise ? vehicle.exercise : vehicleUpdate.exercise,
      board: vehicle.board ? vehicle.board : vehicleUpdate.board,
      chassi: vehicle.chassi ? vehicle.chassi : vehicleUpdate.chassi,
      kindSpecies: vehicle.kindSpecies ? vehicle.kindSpecies : vehicleUpdate.kindSpecies,
      vehicleFuel: vehicle.vehicleFuel ? vehicle.vehicleFuel : vehicleUpdate.vehicleFuel,
      brandModel: vehicle.brandModel ? vehicle.brandModel : vehicleUpdate.brandModel,
      yearOfManufacture: vehicle.yearOfManufacture ? vehicle.yearOfManufacture : vehicleUpdate.yearOfManufacture,
      modelYear: vehicle.modelYear ? vehicle.modelYear : vehicleUpdate.modelYear,
      capPotCil: vehicle.capPotCil ? vehicle.capPotCil : vehicleUpdate.capPotCil,
      category: vehicle.category ? vehicle. category : vehicleUpdate.category,
      predominatColor: vehicle.predominatColor ? vehicle.predominatColor : vehicleUpdate.predominatColor
    };

    await this.repository.update({'board': board}, obj)

    const query = await this.repository.createQueryBuilder('v')
      .where({board: board})
      .select(['v', 'profile.id', 'profile.document', 'profile.name'])
      .innerJoin('v.idProfile', 'profile', 'v.idProfile = profile.id')
      .getMany();

    return new Result('Veiculo atualizado com sucesso', true, false, query);
  }

  async queryVehicle(board: string): Promise<Result> {
    //8522b1d4-d67a-4838-a20e-c5c9d1d450fb
    //const query = await this.repository.findOne({board: board}, { relations: ['idProfile']})
    const query = await this.repository.createQueryBuilder('v')
      .where({board: board})
      .select(['v', 'profile.id', 'profile.document', 'profile.name'])
      .innerJoin('v.idProfile', 'profile', 'v.idProfile = profile.id')
      .getMany();

    console.log(query);
    if ( query )
      return new Result(null, false, null, query);

    throw new HttpException(new Result('Veiculo não localizado', false, null, null), HttpStatus.FORBIDDEN);

  }

  async deleteVehicle(board: string): Promise<Result> {
    const vehicleDelete = await this.repository.update({'board': board, isActivate: true}, {isActivate: false})
    if ( vehicleDelete.affected > 0 ) {
      return new Result('Veiculo deletado com sucesso', true, null, null);
    }
    return new Result('Veiculo não localizado, erro ao deletar veiculo', true, null, null);
  }
}
