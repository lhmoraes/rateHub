import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AccountService } from '../../account/service/AccountService';
import { RateAccount }    from '../../account/model/RateAccount';

/**
 * 
 */
@Controller('accounts')
export class RateAccountController {
  constructor(private readonly accountService: AccountService) {
  }

  /**
   * 
   */
  @Get("crawler")
  async crawler(): Promise<String> {
    return await this.accountService.crawler();
  }

  /**
   * 
   */
  @Get()
  async findAll(): Promise<RateAccount[]> {
    return await this.accountService.findAll();
  }

  /**
   * 
   */
  @Get(':rateType' + '/rates')
  async findByRates(@Param('rateType') rateType: string): Promise<RateAccount[]> {
    return await this.accountService.findByRateType(rateType);
  }  
}
