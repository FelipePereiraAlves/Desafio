import {ProfileModel} from '../../profile/model-dto/profile.model';

export class VehicleModel {
  constructor(
    public idProfile: ProfileModel,
    public via: string,
    public renavanCode: string,
    public rntrc: string,
    public exercise: number,
    public board: string,
    public chassi: string,
    public kindSpecies: string,
    public vehicleFuel: string,
    public brandModel: string,
    public yearOfManufacture: number,
    public modelYear: number,
    public capPotCil: string,
    public category: string,
    public predominatColor: string,
  ) {}

}
