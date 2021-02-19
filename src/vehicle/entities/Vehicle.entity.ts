import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {Profile} from '../../profile/entities/Profile.entity';
import {Accident} from '../../accident/entities/accident.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne( type => Profile, profile => profile.id)
  @JoinColumn({name: 'idProfile', referencedColumnName: 'id'})
  idProfile: Profile;

  @Column( { length: 2, nullable: true })
  via: string;

  @Column( { length: 11, nullable: true })
  renavanCode: string;

  @Column({ length: 30, nullable: true })
  rntrc: string;

  @Column('int', { nullable: true })
  exercise: number;

  @Column({ length: 10 })
  board: string;

  @Column({ length: 40, nullable: true })
  chassi: string;

  @Column( { length: 40, nullable: true })
  kindSpecies: string;

  @Column({ length: 8, nullable: true }) //gasolina(8) alcool(6) diesel(6) flex(4)
  vehicleFuel: string;

  @Column( { length: 40, nullable: true })
  brandModel: string;

  @Column('int', { nullable: true })
  yearOfManufacture: number;

  @Column('int', { nullable: true })
  modelYear: number;

  @Column( { length: 40, nullable: true })
  capPotCil: string;

  @Column({ length: 15, nullable: true }) //particular(10) aluguel(7)
  category: string;

  @Column( { length: 15, nullable: true })
  predominatColor: string;

  @Column('boolean', { default: true})
  isActivate: boolean
}
