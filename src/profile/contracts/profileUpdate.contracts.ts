import { Injectable } from '@nestjs/common';
import { Contract } from '../../utils/contract';
import { Flunt } from '../../utils/flunt';
import { ProfileUpdateDto } from '../model-dto/profileUpdate.dto';


@Injectable()
export class ProfileUpdateContracts implements Contract {
  errors: any[];

  validate(model: ProfileUpdateDto): boolean {

    const flunt = new Flunt();

    flunt.hasMinLen(model.password,6, 'Senha menor que 6 caracter');
    flunt.hasMinLen(model.contraPassword,6, 'Senha menor que 6 caracter');
    flunt.isPassword(model.password, model.contraPassword, 'Senha e ContraSenha diferente');

    if (model.gender)
      flunt.hasMaxLen(model.gender, 1, 'sexo com Tamanho maior que o suportado');
    if ( model.recordNumber )
      flunt.hasMaxLen(model.recordNumber, 11, 'Numero de registro com Tamanho maior que o suportado');
    if ( model.habilitationCategory )
      flunt.hasMaxLen(model.habilitationCategory, 2, 'Categoria da habilitação com Tamanho maior que o suportado');
    if ( model.habilitationPlaceLicence )
      flunt.hasMaxLen(model.habilitationPlaceLicence, 100, 'Local da habilitação com Tamanho maior que o suportado');
    if ( model.zipCode )
      flunt.hasMaxLen(model.zipCode, 8, 'CEP com Tamanho maior que o suportado');
    if ( model.street )
      flunt.hasMaxLen(model.street, 100, 'Nome da rua com Tamanho maior que o suportado');
    if ( model.numberHouse )
      flunt.hasMaxLen(model.numberHouse, 14, 'Número da residencia com Tamanho maior que o suportado');
    if ( model.complement )
      flunt.hasMaxLen(model.complement, 14, 'Complemento com Tamanho maior que o suportado');
    if ( model.neighborhood )
      flunt.hasMaxLen(model.neighborhood, 40, 'Nome do bairro com Tamanho maior que o suportado');
    if ( model.city )
      flunt.hasMaxLen(model.city, 40, 'Nome da cidade com Tamanho maior que o suportado');
    if ( model.stateAddress )
      flunt.hasMaxLen(model.stateAddress, 2, 'Estado com Tamanho maior que o suportado');


    this.errors = flunt.errors;

    return flunt.isValid();
  }

}
