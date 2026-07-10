import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Donation } from './donation.entity';
import { Task } from './task.entity';

@Entity('ngos')
export class NGO {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  walletAddress: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  logo: string;

  @Column({ default: false })
  verified: boolean;

  @Column({ default: '0' })
  totalRaisedXLM: string;

  @Column({ type: 'text', nullable: true })
  registrationNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Donation, (donation) => donation.ngo)
  donations: Donation[];

  @OneToMany(() => Task, (task) => task.ngo)
  tasks: Task[];
}
