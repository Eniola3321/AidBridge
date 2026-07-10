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

@Entity('rewards')
export class Reward {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text', nullable: true })
  imageUrl: string;

  @Column() // token, nft_badge
  type: string;

  @Column()
  amount: string; // XLM amount for tokens or NFT ID for badges

  @Column({ default: 'issued' }) // issued, claimed, revoked
  status: string;

  @Column({ nullable: true })
  rarity: string; // common, rare, epic, legendary

  @CreateDateColumn()
  issuedAt: Date;

  @Column({ nullable: true })
  claimedAt: Date;

  @ManyToOne(() => Volunteer)
  @JoinColumn()
  volunteer: Volunteer;

  @Column()
  volunteerId: string;
}
