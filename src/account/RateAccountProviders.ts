import { RateAccount } from '../account/model/RateAccount';

export const rateAccountProviders = [
  {
    provide: 'AccountRepository',
    useValue: RateAccount,
  },
];
