import { Module }            from '@nestjs/common';
import { RateAccountModule } from './account/RateAccountModule';

@Module({
  imports: [RateAccountModule],
})
export class ApplicationModule {}
