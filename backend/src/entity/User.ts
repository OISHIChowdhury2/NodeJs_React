import {Entity,Column,PrimaryGeneratedColumn,BaseEntity,CreateDateColumn,UpdateDateColumn} from "typeorm";
import { isEmail, isEmpty, isPhoneNumber, Length,Max,MAX } from "class-validator"
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()

  email: string;

  @Column()
  address: string;

  @Column()
  @Max(11)
  phone: number;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
function IsEmail() {
  throw new Error("Function not implemented.");
}

