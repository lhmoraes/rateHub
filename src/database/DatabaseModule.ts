import { Module }            from '@nestjs/common';
import { databaseProviders } from '../database/DatabaseProviders';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
