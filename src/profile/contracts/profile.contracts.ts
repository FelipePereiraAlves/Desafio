import {Injectable} from '@nestjs/common';
import {Contract} from '../../utils/contract';
import {Flunt} from '../../utils/flunt';
import {ProfileDto} from '../model-dto/profile.dto';


@Injectable()
export class ProfileContracts implements Contract {
  errors: any[];

  validate(model: ProfileDto): boolean {

    const flunt = new Flunt();
    flunt.isCpf(model.document, 'CPF invalido');
    flunt.hasMinLen(model.password,6, 'Senha menor que 6 caracter');
    flunt.hasMinLen(model.contraPassword,6, 'Senha menor que 6 caracter');
    flunt.isPassword(model.password, model.contraPassword, 'Senha e ContraSenha diferente');
    flunt.isName(model.name, 'Nome invallido');

    flunt.hasMaxLen(model.document, 14, 'Documento com Tamanho maior que o suportado');
    flunt.hasMaxLen(model.name, 80, 'Nome com Tamanho maior que o suportado');
    if (model.gender)
      flunt.hasMaxLen(model.gender, 1, 'sexo com Tamanho maior que o suportado');
    if (model.identity)
      flunt.hasMaxLen(model.identity, 14, 'RG com Tamanho maior que o suportado');
    if ( model.issuingBody )
      flunt.hasMaxLen(model.issuingBody, 5, 'Orgão expedidor com Tamanho maior que o suportado');
    if ( model.state )
      flunt.hasMaxLen(model.state, 2, 'Estado com Tamanho maior que o suportado');
    if ( model.dad )
      flunt.hasMaxLen(model.dad, 80, 'Nome da mãe com Tamanho maior que o suportado');
    if ( model.mother )
      flunt.hasMaxLen(model.mother, 80, 'Nome da pai com Tamanho maior que o suportado');
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
