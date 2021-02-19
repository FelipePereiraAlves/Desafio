export class AccidentDto {
  constructor(
    public id: string,
    public idProfile: string,
    public idVehicle: string,
    public idThird: [],
    public idThirdsVehicle: [],
    public obs: string,
    public isActivate: boolean
  ) {
  }
}
