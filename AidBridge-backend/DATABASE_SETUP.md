# Database Setup Guide

## Overview

This backend uses **TypeORM** with **PostgreSQL** for data persistence. The schema includes 7 core entities for the AidBridge platform.

## Database Entities

### 1. **User**

Represents platform users (donors, volunteers, admins)

- Fields: `id`, `walletAddress`, `email`, `displayName`, `profileImage`, `role`, `emailVerified`, `createdAt`, `updatedAt`
- Relations: One-to-Many with Donations and Volunteers

### 2. **NGO**

Represents verified Non-Governmental Organizations

- Fields: `id`, `name`, `walletAddress`, `description`, `website`, `email`, `logo`, `verified`, `totalRaisedXLM`, `registrationNumber`, `createdAt`, `updatedAt`
- Relations: One-to-Many with Donations and Tasks

### 3. **Donation**

Records all donations made to NGOs

- Fields: `id`, `amount`, `transactionHash`, `status`, `message`, `confirmedAt`, `donorId`, `ngoId`, `createdAt`, `updatedAt`
- Relations: Many-to-One with User (donor) and NGO

### 4. **Volunteer**

Represents volunteer profiles

- Fields: `id`, `reputationScore`, `tasksCompleted`, `totalRewardsEarned`, `userId`, `joinedAt`, `updatedAt`
- Relations: One-to-Many with TaskSubmissions

### 5. **Task**

Represents volunteer tasks posted by NGOs

- Fields: `id`, `title`, `description`, `imageUrl`, `status`, `rewardAmount`, `deadline`, `maxVolunteers`, `applicantsCount`, `ngoId`, `createdAt`, `updatedAt`
- Relations: One-to-Many with TaskSubmissions

### 6. **TaskSubmission**

Tracks volunteer task submissions and verification

- Fields: `id`, `proofDescription`, `proofImage`, `status`, `verificationCount`, `rejectionReason`, `volunteerId`, `taskId`, `submittedAt`, `updatedAt`
- Relations: Many-to-One with Volunteer and Task

### 7. **Reward**

Represents tokens and NFT badges earned by volunteers

- Fields: `id`, `title`, `description`, `imageUrl`, `type`, `amount`, `status`, `rarity`, `volunteerId`, `issuedAt`, `claimedAt`
- Relations: Many-to-One with Volunteer

## Setup Instructions

### 1. Prerequisites

```bash
# Ensure PostgreSQL is installed and running
# Create a database named 'aidbridge'
createdb aidbridge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your database credentials
# DB_HOST=localhost
# DB_PORT=5432
# DB_USERNAME=postgres
# DB_PASSWORD=your_password
# DB_NAME=aidbridge
```

### 4. Run Migrations

```bash
# Run pending migrations
npm run migration:run
```

## Database Commands

### Create a New Migration

After modifying entities:

```bash
npm run migration:generate ./migrations/YourMigrationName
```

### Run Migrations

```bash
npm run migration:run
```

### Revert Last Migration

```bash
npm run migration:revert
```

### View Database

```bash
# Connect to PostgreSQL
psql -U postgres -d aidbridge

# List tables
\dt

# Describe a table
\d table_name
```

## Development Notes

- **Synchronize on Dev**: `synchronize: true` in dev environment auto-syncs schema
- **Production**: Always use migrations for production databases
- **Relations**: Foreign keys are auto-indexed for query performance
- **Timestamps**: All entities track creation and update times

## File Structure

```
src/
├── database/
│   ├── database.config.ts       # TypeORM configuration
│   ├── database.module.ts       # NestJS database module
│   └── data.source.ts          # DataSource for migrations
├── entities/
│   ├── user.entity.ts
│   ├── ngo.entity.ts
│   ├── donation.entity.ts
│   ├── volunteer.entity.ts
│   ├── task.entity.ts
│   ├── task-submission.entity.ts
│   ├── reward.entity.ts
│   └── index.ts                # Entity exports

migrations/
└── 1720569600000-CreateInitialSchema.ts
```

## Next Steps

1. Create database repositories for each entity
2. Implement CRUD services
3. Build API controllers and routes
4. Add Stellar transaction verification
5. Implement volunteer reward distribution

## Troubleshooting

**Connection refused**

```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Start if needed
sudo systemctl start postgresql
```

**Migration errors**

```bash
# Check migration status
npm run typeorm migration:show

# Revert and retry
npm run migration:revert
```

**Schema out of sync**

```bash
# For development only - recreate schema
# Delete and recreate database
dropdb aidbridge
createdb aidbridge
npm run migration:run
```
