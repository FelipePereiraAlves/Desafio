import * as mongoose from 'mongoose';

export const RegisterProfileSchema = new mongoose.Schema({

  document:                 { type: String },
  password:                 { type: String },
  name:                     { type: String },
  birtDate:                 { type: Date },
  identity:                 { type: String },
  issuingBody:              { type: String },
  state:                    { type: String },
  dad:                      { type: String },
  mother:                   { type: String },
  recordNumber:             { type: String },
  habilitationCategory:     { type: String},
  habilitationShelfLite:    { type: Date },
  habilitationFirstLicence: { type: Date },
  habilitationPlaceLicence: { type: String },
  customZipCode:            { type: String },
  street:                   { type: String },
  numberHouse:              { type: String },
  complement:               { type: String },
  district:                 { type: String },
  country:                  { type: String },
  stateAndress:             { type: String },


}, { timestamps: true, collection: 'Profile'});
