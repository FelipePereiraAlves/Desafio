import {Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors} from '@nestjs/common';
import {Result} from '../utils/result.model';
import {ProfileService} from './profile.service';
import {ValidatorInterceptor} from '../interceptors/validator.interceptor';
import {ProfileContracts} from './contracts/profile.contracts';
import {ProfileDto} from './model-dto/profile.dto';
import {ProfileUpdateContracts} from './contracts/profileUpdate.contracts';
import {ProfileUpdateDto} from './model-dto/profileUpdate.dto';

@Controller('api/v1/profile')
export class ProfileController {

  constructor( private readonly profileService: ProfileService ) {}

  @Get(':document')
  async queryProfile(@Param('document') document: string): Promise<Result> {
    return this.profileService.queryProfile(document);
  }

  @Post('create')
  @UseInterceptors(new ValidatorInterceptor(new ProfileContracts()))
  async createProfile(@Body() profile: ProfileDto): Promise<Result> {
    return this.profileService.createProfile(profile);
  }

  @Patch(':document')
  @UseInterceptors(new ValidatorInterceptor(new ProfileUpdateContracts))
  async updateProfile(@Param('document') document: string, @Body() profile: ProfileUpdateDto): Promise<Result> {
    return this.profileService.updateProfile(document, profile);
  }

  @Delete(':document')
  async deleteProfile(@Param('document') document: string): Promise<Result> {
    return this.profileService.deleteProfile(document);
  }
}
