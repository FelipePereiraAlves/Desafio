import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';
import {Profile} from '../../profile/entities/Profile.entity';
import {Vehicle} from '../../vehicle/entities/Vehicle.entity';
/*{
  CLIENTE PROVOCOU O ACIDENTE
  VEICULO QUE PROVOCOU O ACIDENTE
  [TERCEIROS ENVOLVIDOS]
  [VEICULOS DE TERCEIROS ENVOLVIDOS]
  Não conseguir realizar o relacionamento ManyToOne -> OneToMany (Preciso que o banco aceite o array | Não entendir o por que não esta aceitando)
}*/
@Entity()
export class Accident {
  @PrimaryColumn()
  id: string;

  @Column()
  documentClient: string;

  @Column()
  boardClient: string;

  @Column()
  documentThirds: string;

  @Column()
  boardThirds: string;

  @Column('text', { nullable: true })
  obs: string;

  @Column('boolean', { default: true})
  isActivate: boolean
}
/*export class Accident {
  @Column()
  id: string;

  @ManyToOne( type => Profile, profile => profile.id)
  @JoinColumn({name: 'idProfile', referencedColumnName: 'id'})
  idProfile: Profile;

  @ManyToOne( type => Vehicle, vehicle => vehicle.id)
  @JoinColumn({name: 'idVehicle', referencedColumnName: 'id'})
  idVehicle: Vehicle;

  @ManyToOne( type => Profile, profile => profile.id)
  @JoinColumn({name: 'documentThirds', referencedColumnName: 'id'})
  documentThirds: Profile[];

  @ManyToOne( type => Vehicle, vehicle => vehicle.id)
  @JoinColumn({name: 'idThirdsVehicle', referencedColumnName: 'id'})
  idThirdsVehicle: Vehicle[];

  @Column('text', { nullable: true })
  obs: string;

  @Column('boolean', { default: true})
  isActivate: boolean;
}*/

/*
* thirds: [{
    idThird:          { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
  }],
  thirdsVehicle: [{
    idThirdsVehicle:  { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }
  }],*/
