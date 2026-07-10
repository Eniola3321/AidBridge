import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialSchema1720569600000 implements MigrationInterface {
  name = 'CreateInitialSchema1720569600000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "walletAddress" varchar UNIQUE NOT NULL,
        "email" varchar,
        "displayName" varchar,
        "profileImage" text,
        "role" varchar DEFAULT 'donor',
        "emailVerified" boolean DEFAULT false,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW()
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "ngos" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" varchar UNIQUE NOT NULL,
        "walletAddress" varchar NOT NULL,
        "description" text NOT NULL,
        "website" varchar,
        "email" varchar,
        "logo" text,
        "verified" boolean DEFAULT false,
        "totalRaisedXLM" varchar DEFAULT '0',
        "registrationNumber" text,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW()
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "donations" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "amount" varchar NOT NULL,
        "transactionHash" varchar NOT NULL,
        "status" varchar DEFAULT 'pending',
        "message" varchar,
        "confirmedAt" TIMESTAMP,
        "donorId" uuid NOT NULL,
        "ngoId" uuid NOT NULL,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY ("donorId") REFERENCES "users"("id"),
        FOREIGN KEY ("ngoId") REFERENCES "ngos"("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "volunteers" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "reputationScore" integer NOT NULL,
        "tasksCompleted" integer DEFAULT 0,
        "totalRewardsEarned" varchar DEFAULT '0',
        "userId" uuid NOT NULL,
        "joinedAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY ("userId") REFERENCES "users"("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "tasks" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "title" varchar NOT NULL,
        "description" text NOT NULL,
        "imageUrl" text,
        "status" varchar DEFAULT 'open',
        "rewardAmount" varchar NOT NULL,
        "deadline" TIMESTAMP NOT NULL,
        "maxVolunteers" integer DEFAULT 1,
        "applicantsCount" integer DEFAULT 0,
        "ngoId" uuid NOT NULL,
        "createdAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY ("ngoId") REFERENCES "ngos"("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "task_submissions" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "proofDescription" text NOT NULL,
        "proofImage" text,
        "status" varchar DEFAULT 'pending',
        "verificationCount" integer DEFAULT 0,
        "rejectionReason" varchar,
        "volunteerId" uuid NOT NULL,
        "taskId" uuid NOT NULL,
        "submittedAt" TIMESTAMP DEFAULT NOW(),
        "updatedAt" TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY ("volunteerId") REFERENCES "volunteers"("id"),
        FOREIGN KEY ("taskId") REFERENCES "tasks"("id")
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "rewards" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "title" varchar NOT NULL,
        "description" text NOT NULL,
        "imageUrl" text,
        "type" varchar NOT NULL,
        "amount" varchar NOT NULL,
        "status" varchar DEFAULT 'issued',
        "rarity" varchar,
        "volunteerId" uuid NOT NULL,
        "issuedAt" TIMESTAMP DEFAULT NOW(),
        "claimedAt" TIMESTAMP,
        FOREIGN KEY ("volunteerId") REFERENCES "volunteers"("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "rewards"`);
    await queryRunner.query(`DROP TABLE "task_submissions"`);
    await queryRunner.query(`DROP TABLE "tasks"`);
    await queryRunner.query(`DROP TABLE "volunteers"`);
    await queryRunner.query(`DROP TABLE "donations"`);
    await queryRunner.query(`DROP TABLE "ngos"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
