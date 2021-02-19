import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Result } from '../utils/result.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/Profile.entity';
import { Repository } from 'typeorm';
import {ProfileDto} from './model-dto/profile.dto';
import {Md5} from 'md5-typescript';
import {ProfileUpdateDto} from './model-dto/profileUpdate.dto';

@Injectable()
export class ProfileService {

  constructor(
    @InjectRepository(Profile) private readonly repository: Repository<Profile>
  ) {}

  async createProfile(profile: ProfileDto): Promise<Result> {
    profile.document = profile.document.replace(/\D/g, '');

    if ( await this.repository.findOne({document: profile.document} )) {
      throw new HttpException(new Result('Usuario já cadastrado', false, null, null), HttpStatus.FORBIDDEN);
    }

    profile.password = Md5.init(`${profile.password}${process.env.PASSWORD_MD5}`);
    profile.zipCode = profile.zipCode.replace(/\D/g, '');

    const res = await this.repository.save(profile);
    return new Result('Create Profile', true, false, res);
  }

  async queryProfile(document: string): Promise<Result> {
    const profile = await this.repository.findOne({document: document.replace(/\D/g, '')})
    const { password, ...result } = profile;
    return new Result(null, true, null, result);
  }

  async queryProfileTest(document: string): Promise<Result> {
    const profile = await this.repository.findOne({document: document.replace(/\D/g, '')})
    return new Result(null, true, null, profile);
  }

  async updateProfile(document: string, profile: ProfileUpdateDto): Promise<Result> {
    document = document.replace(/\D/g, '');

    const profileUpdate = await this.repository.findOne({document: document} );
    if (! profileUpdate) {
      throw new HttpException(new Result('Usuario nao localizado', false, null, null), HttpStatus.FORBIDDEN);
    }

    if (profile.password)
      profile.password = Md5.init(`${profile.password}${process.env.PASSWORD_MD5}`);
    if (profile.zipCode)
      profile.zipCode = profile.zipCode.replace(/\D/g, '');

    const obj = {
      password:                 profile.password ? profile.password : profileUpdate.password,
      gender:                   profile.gender ? profile.gender: profileUpdate.gender,
      recordNumber:             profile.recordNumber ? profile.recordNumber : profileUpdate.recordNumber,
      habilitationCategory:     profile.habilitationCategory ? profile.habilitationCategory : profileUpdate.habilitationCategory,
      habilitationShelfLite:    profile.habilitationShelfLite ? profile.habilitationShelfLite : profileUpdate.habilitationShelfLite,
      habilitationPlaceLicence: profile.habilitationPlaceLicence ? profile.habilitationPlaceLicence : profileUpdate.habilitationPlaceLicence,
      zipCode:                  profile.zipCode ? profile.zipCode : profileUpdate.zipCode,
      street:                   profile.street ? profile.street : profileUpdate.street,
      numberHouse:              profile.numberHouse ? profile.numberHouse : profileUpdate.numberHouse,
      complement:               profile.complement ? profile.complement : profileUpdate.complement,
      neighborhood:             profile.neighborhood ? profile.neighborhood : profileUpdate.neighborhood,
      city:                     profile.zipCode ? profile.zipCode : profileUpdate.zipCode,
      stateAddress:             profile.stateAddress ? profile.stateAddress : profileUpdate.zipCode,
    }
    console.log(obj);
    await this.repository.update({document: document}, obj);

    const res = await this.repository.findOne({document: document.replace(/\D/g, '')})
    const { password, ...result } = res;
    return new Result('Profile atualizado com sucesso', true, null, result);
  }

  async deleteProfile(document: string): Promise<Result> {
    const profileDelete = await this.repository.update({document: document.replace(/\D/g, ''), isActive: true }, {isActive: false});
    if ( profileDelete.affected > 0 ) {
      return new Result('Usuario deletado com sucesso', true, null, null);
    }
      return new Result('Usuario não localizado, erro ao deletar usuario', true, null, null);
  }

  /*async queryDocument(data: any): Promise<Result> {
    const query = await this.profileModel.findOne({'document': data.document}).exec();
    if ( !query )
      return new Result('DOCUMENTO NÂO LOCALIZADO', true, false, null)
    else
      return new Result('DOCUMENTO LOCALIZADO', true, false, query);
  }*/
}
