export class ProfileUpdateDto {
  constructor(
    public password:                 string,
    public contraPassword:           string,
    public gender:                   string,
    public recordNumber:             string,
    public habilitationCategory:     string,
    public habilitationShelfLite:    Date,
    public habilitationPlaceLicence: string,
    public zipCode:                  string,
    public street:                   string,
    public numberHouse:              string,
    public complement:               string,
    public neighborhood:             string,
    public city:                     string,
    public stateAddress:             string,
  ) { }
}
