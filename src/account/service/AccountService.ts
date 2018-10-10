import { Injectable, Inject } from '@nestjs/common';
import { RateAccount }    from '../../account/model/RateAccount';

@Injectable()
export class AccountService {
  constructor(
    @Inject('AccountRepository') private readonly accountRepository: typeof RateAccount) {  }

  /**
   * 
   */
  async crawler(): Promise<String> {    
    const Crawler = require("crawler");
    const jsdom   = require("jsdom");
    const { JSDOM } = jsdom;
    const createdData = new Date();
 
    this.deleteAll();

    var crawler = new Crawler({
        jQuery : jsdom,
        maxConnections : 10,

        callback : function (error, res, done) {
            if(error){
                console.log(error);

            }else{
                var dom = new JSDOM(res.body);
                var doc = dom.window.document;

                doc.querySelectorAll('.rh-table').forEach(function(elem) {
                  var rateType = null;
                  var BreakException = {};

                  // Rate Type 
                  elem.querySelector('thead tr').childNodes.forEach(function(elem2) {
                      if ((rateType==null) && (elem2.textContent) && (elem2.textContent.trim().length>0)){  
                        rateType = elem2.textContent
                        rateType = rateType.replace(' ', '-');
                        console.log(rateType);
                      }
                  });

                  // Rate Values
                  elem.querySelectorAll('tbody tr').forEach(function(elem3) {
                    if (elem3.querySelector('tr .provider-name')!=null){

                      var brokerName = elem3.querySelector('tr .provider-name').textContent.trim();
                      console.log ('brokerName: ' + brokerName);

                      var brokerLogo = 'https://www.ratehub.ca' + elem3.querySelector('.provider-logo img').src;
                      console.log ('brokerLogo: ' + brokerLogo);

                      var interestRate = elem3.querySelector('.col-interest span').textContent.trim();
                      interestRate = interestRate.replace('%', '');
                      console.log ('interestRate: ' + interestRate);

                      var returnAmount = elem3.querySelector('.col-value span').textContent.trim();
                      returnAmount = returnAmount.replace('$', '');
                      console.log ('returnAmount: ' + returnAmount);

                      // Save the rate  
                      const rateAccount = new RateAccount();
                      rateAccount.brokerName = brokerName;
                      rateAccount.brokerLogo = brokerLogo;
                      rateAccount.location = 'Toronto, ON'
                      rateAccount.interestRate = interestRate;                  
                      rateAccount.returnAmount = returnAmount;                  
                      rateAccount.type = rateType;
                      rateAccount.createdData = createdData;
                      rateAccount.save();                                        
                   }                   
                });
              });
            }
            done();
        }
    });

    // Queue just one URL, with default callback
    crawler.queue('https://www.ratehub.ca/savings-accounts/best-savings-accounts');  

    return await Promise.resolve("true");
  }

  /**
   * 
   */
  async findAll(): Promise<RateAccount[]> {
    return await this.accountRepository.findAll<RateAccount>();
  }

  /**
   * 
   */
  async findByRateType(rateType: string): Promise<RateAccount[]> {
    return await this.accountRepository.findAll<RateAccount>({
      where: {
        type: rateType
      }
    });
  }

  /**
   * 
   */
  async deleteAll(): Promise<number> {
    return await this.accountRepository.destroy({
      where: {}
    });
  }
}
