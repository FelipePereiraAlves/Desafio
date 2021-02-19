import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Accident} from '../../accident/entities/accident.entity';

@Entity()
export class Profile {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 14 })
  document:     string;

  @Column({ length: 100 })
  password:     string;

  @Column({ length: 80 })
  name:         string;

  @Column('date', {  nullable: true})
  birtDate:     Date;

  @Column({ length: 1,  nullable: true })
  gender:       string;

  @Column({ length: 14,  nullable: true })
  identity:     string;

  @Column({ length: 5,  nullable: true })
  issuingBody:  string;

  @Column({ length: 2,  nullable: true })
  state:        string;

  @Column({ length: 80,  nullable: true })
  dad:          string;

  @Column({ length: 80,  nullable: true })
  mother:       string;

  @Column({ length: 11,  nullable: true })
  recordNumber: string;

  @Column({ length: 2,  nullable: true })
  habilitationCategory:     string;

  @Column('date', {  nullable: true})
  habilitationShelfLite:    Date;

  @Column('date', {  nullable: true})
  habilitationFirstLicence: Date;

  @Column( { length: 100,  nullable: true })
  habilitationPlaceLicence: string;

  @Column( { length: 8,  nullable: true })
  zipCode:            string;

  @Column( { length: 100,  nullable: true })
  street:                   string;

  @Column({ length: 14,  nullable: true })
  numberHouse:              string;

  @Column({ length: 14,  nullable: true })
  complement:               string;

  @Column({ length: 40,  nullable: true })
  neighborhood:                 string;

  @Column({ length: 40,  nullable: true })
  city:                  string;

  @Column( { length: 2,  nullable: true})
  stateAddress:             string;

  @Column('boolean', {default: true})
  isActive:                 boolean
}


