import * as mongoose from 'mongoose';

export const RegisterVehicleSchema = new mongoose.Schema({

  idProfile:                { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  via:                      { type: String },
  renavanCode:              { type: String },
  rntrc:                    { type: String },
  exercise:                 { type: String },
  board:                    { type: String },
  chassi:                   { type: String },
  kindSpecies:              { type: String },
  vehicleFuel:              { type: String },
  brandModel:               { type: String },
  yearOfManufacture:        { type: String },
  modelYear:                { type: String },
  capPotCil:                { type: String },
  category:                 { type: String },
  predominatColor:          { type: String },
}, { timestamps: true, collection: 'Vehicle'});
