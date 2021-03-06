export class ProfileModel {
  constructor(
    public id:                       string,
    public document:                 string,
    public password:                 string,
    public name:                     string,
    public birtDate:                 Date,
    public gender:                   string,
    public identity:                 string,
    public issuingBody:              string,
    public state:                    string,
    public dad:                      string,
    public mother:                   string,
    public recordNumber:             string,
    public habilitationCategory:     string,
    public habilitationShelfLite:    Date,
    public habilitationFirstLicence: Date,
    public habilitationPlaceLicence: string,
    public zipCode:                  string,
    public street:                   string,
    public numberHouse:              string,
    public complement:               string,
    public neighborhood:             string,
    public city:                     string,
    public stateAddress:             string,
    public isActive:                 boolean
  ) { }
}
