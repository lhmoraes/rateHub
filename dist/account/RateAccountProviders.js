"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RateAccount_1 = require("../account/model/RateAccount");
exports.rateAccountProviders = [
    {
        provide: 'AccountRepository',
        useValue: RateAccount_1.RateAccount,
    },
];
//# sourceMappingURL=RateAccountProviders.js.map