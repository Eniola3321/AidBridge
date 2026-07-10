import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Volunteer } from './volunteer.entity';
import { Task } from './task.entity';

@Entity('task_submissions')
export class TaskSubmission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  proofDescription: string;

  @Column({ type: 'text', nullable: true })
  proofImage: string;

  @Column({ default: 'pending' }) // pending, approved, rejected
  status: string;

  @Column({ default: 0 })
  verificationCount: number;

  @Column({ nullable: true })
  rejectionReason: string;

  @CreateDateColumn()
  submittedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Volunteer, (volunteer) => volunteer.submissions)
  @JoinColumn()
  volunteer: Volunteer;

  @Column()
  volunteerId: string;

  @ManyToOne(() => Task, (task) => task.submissions)
  @JoinColumn()
  task: Task;

  @Column()
  taskId: string;
}
