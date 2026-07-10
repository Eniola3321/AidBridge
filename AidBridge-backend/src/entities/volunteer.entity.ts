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
import { User } from './user.entity';
import { TaskSubmission } from './task-submission.entity';

@Entity('volunteers')
export class Volunteer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reputationScore: number;

  @Column({ default: 0 })
  tasksCompleted: number;

  @Column({ default: '0' })
  totalRewardsEarned: string;

  @CreateDateColumn()
  joinedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.volunteerActivities)
  @JoinColumn()
  user: User;

  @Column()
  userId: string;

  @OneToMany(() => TaskSubmission, (submission) => submission.volunteer)
  submissions: TaskSubmission[];
}
