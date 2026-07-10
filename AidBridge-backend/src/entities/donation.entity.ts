import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { NGO } from './ngo.entity';

@Entity('donations')
export class Donation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount: string; // in XLM

  @Column()
  transactionHash: string;

  @Column({ default: 'pending' }) // pending, confirmed, failed
  status: string;

  @Column({ nullable: true })
  message: string;

  @Column({ type: 'timestamp', nullable: true })
  confirmedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.donations)
  @JoinColumn()
  donor: User;

  @Column()
  donorId: string;

  @ManyToOne(() => NGO, (ngo) => ngo.donations)
  @JoinColumn()
  ngo: NGO;

  @Column()
  ngoId: string;
}
