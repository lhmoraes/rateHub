import { Table, Column, AutoIncrement, PrimaryKey, Model, DataType } from 'sequelize-typescript';

@Table
export class RateAccount extends Model<RateAccount> {

  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  brokerName: string;

  @Column 
  brokerLogo: string;

  @Column 
  location: string;

  @Column({type: DataType.DOUBLE(10,4)})
  interestRate: number;

  @Column({type: DataType.DOUBLE(10,4)})
  returnAmount: number;

  @Column 
  type: string;

  @Column 
  createdData: Date;
}




