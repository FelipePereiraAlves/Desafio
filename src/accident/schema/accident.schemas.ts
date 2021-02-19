import * as mongoose from 'mongoose';

export const RegistAccidentSchema = new mongoose.Schema({
  idClient:           { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  idVehicleClient:    { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  thirds: [{
    idThird:          { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
  }],
  thirdsVehicle: [{
    idThirdsVehicle:  { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }
  }],
  isActivate:         { type: Boolean }
}, {timestamps: true, collection: 'Accident'});
