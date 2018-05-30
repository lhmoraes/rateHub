import { Module }                from '@nestjs/common';
import { RateAccountController } from '../account/controller/RateAccountController';
import { AccountService }        from '../account/service/AccountService';
import { rateAccountProviders }  from '../account/RateAccountProviders';
import { DatabaseModule }        from '../database/DatabaseModule';

@Module({
  imports: [DatabaseModule],
  controllers: [RateAccountController],
  providers: [AccountService, ...rateAccountProviders],
})
export class RateAccountModule {}
