"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const RateAccount_1 = require("../../account/model/RateAccount");
let AccountService = class AccountService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    crawler() {
        return __awaiter(this, void 0, void 0, function* () {
            const Crawler = require("crawler");
            const jsdom = require("jsdom");
            const { JSDOM } = jsdom;
            const createdData = new Date();
            this.deleteAll();
            var crawler = new Crawler({
                jQuery: jsdom,
                maxConnections: 10,
                callback: function (error, res, done) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        var dom = new JSDOM(res.body);
                        var doc = dom.window.document;
                        doc.querySelectorAll('.rh-table').forEach(function (elem) {
                            var rateType = null;
                            var BreakException = {};
                            elem.querySelector('thead tr').childNodes.forEach(function (elem2) {
                                if ((rateType == null) && (elem2.textContent) && (elem2.textContent.trim().length > 0)) {
                                    rateType = elem2.textContent;
                                    rateType = rateType.replace(' ', '-');
                                    console.log(rateType);
                                }
                            });
                            elem.querySelectorAll('tbody tr').forEach(function (elem3) {
                                if (elem3.querySelector('tr .provider-name') != null) {
                                    var brokerName = elem3.querySelector('tr .provider-name').textContent.trim();
                                    console.log('brokerName: ' + brokerName);
                                    var brokerLogo = 'https://www.ratehub.ca' + elem3.querySelector('.provider-logo img').src;
                                    console.log('brokerLogo: ' + brokerLogo);
                                    var interestRate = elem3.querySelector('.col-interest span').textContent.trim();
                                    interestRate = interestRate.replace('%', '');
                                    console.log('interestRate: ' + interestRate);
                                    var returnAmount = elem3.querySelector('.col-value span').textContent.trim();
                                    returnAmount = returnAmount.replace('$', '');
                                    console.log('returnAmount: ' + returnAmount);
                                    const rateAccount = new RateAccount_1.RateAccount();
                                    rateAccount.brokerName = brokerName;
                                    rateAccount.brokerLogo = brokerLogo;
                                    rateAccount.location = 'Toronto, ON';
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
            crawler.queue('https://www.ratehub.ca/savings-accounts/best-savings-accounts');
            return yield Promise.resolve("true");
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountRepository.findAll();
        });
    }
    findByRateType(rateType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountRepository.findAll({
                where: {
                    type: rateType
                }
            });
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountRepository.destroy({
                where: {}
            });
        });
    }
};
AccountService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('AccountRepository')),
    __metadata("design:paramtypes", [Object])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=AccountService.js.map