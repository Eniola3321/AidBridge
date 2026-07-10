import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { NGO } from './ngo.entity';
import { TaskSubmission } from './task-submission.entity';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', nullable: true })
  imageUrl: string;

  @Column({ default: 'open' }) // open, in_progress, completed, closed
  status: string;

  @Column()
  rewardAmount: string; // in XLM

  @Column({ type: 'timestamp' })
  deadline: Date;

  @Column({ default: 1 })
  maxVolunteers: number;

  @Column({ default: 0 })
  applicantsCount: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => NGO, (ngo) => ngo.tasks)
  @JoinColumn()
  ngo: NGO;

  @Column()
  ngoId: string;

  @OneToMany(() => TaskSubmission, (submission) => submission.task)
  submissions: TaskSubmission[];
}
