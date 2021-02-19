export class VehicleDto {
  constructor(
    public documentProfile: string,
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
  ){}

}
