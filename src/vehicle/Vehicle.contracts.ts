import {Injectable} from '@nestjs/common';
import {Contract} from '../utils/contract';
import {Flunt} from '../utils/flunt';
import {Profile} from '../profile/entities/Profile.entity';


@Injectable()
export class VehicleContracts implements Contract{
  errors: any[];

  validate(model: any): boolean {

    const flunt = new Flunt();

    //flunt.isRequired(model.board, 'Placa, do veiculo requerido')
    //flunt.hasMaxLen(model.board, 10, 'Placa, com tamanho maior que o suportado');

    if ( model.via )
      flunt.hasMaxLen(model.via, 2, 'Via, com Tamanho maior que o suportado');

    if ( model.renavanCode)
      flunt.hasMaxLen(model.renavanCode, 11, 'Renavan, com Tamanho maior que o suportado');

    if( model.rntrc )
      flunt.hasMaxLen(model.rntrc, 30, 'R.N.T.R.C, com Tamanho maior que o suportado');

    if ( model.exercise)
      flunt.hasMaxLen(model.exercise, 4, 'Exercicio, com tamanho maior que o suportado');

    if ( model.chassi )
      flunt.hasMaxLen(model.chassi, 40, 'Chassi, com tamanho maior que o suportado');

    if ( model.kindSpecies )
      flunt.hasMaxLen(model.kindSpecies, 40, 'Espécie Tipo, com tamanho maior que o suportado');

    if ( model.vehicleFuel)
      flunt.hasMaxLen(model.vehicleFuel, 8, 'Combustível, com tamanho maior que o suportado');

    if ( model.brandModel )
      flunt.hasMaxLen(model.brandModel, 40, 'Marca/Modelo, com tamanho maior que o suportado');

    if ( model.yearOfManufacture )
      flunt.hasMaxLen(model.yearOfManufacture, 4, 'Ano Fabricação, com tamanho maior que o suportado');

    if ( model.modelYear)
      flunt.hasMaxLen(model.modelYear, 4, 'Ano Modelo, com tamanho maior que o suportado');

    if ( model.capPotCil )
      flunt.hasMaxLen(model.capPotCil, 40, 'CAP/POT/CIL, com tamanho maior que o suportado');

    if ( model.category )
      flunt.hasMaxLen(model.category, 15, 'Categoria, com tamanho maior que o suportado');

    if ( model.predominatColor )
      flunt.hasMaxLen(model.predominatColor, 15, 'Cor Predominante, com tamanho maior que o suportado');

    this.errors = flunt.errors;
    return flunt.isValid()
  }

}
