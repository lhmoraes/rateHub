"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const RateAccountController_1 = require("../account/controller/RateAccountController");
const AccountService_1 = require("../account/service/AccountService");
const RateAccountProviders_1 = require("../account/RateAccountProviders");
const DatabaseModule_1 = require("../database/DatabaseModule");
let RateAccountModule = class RateAccountModule {
};
RateAccountModule = __decorate([
    common_1.Module({
        imports: [DatabaseModule_1.DatabaseModule],
        controllers: [RateAccountController_1.RateAccountController],
        providers: [AccountService_1.AccountService, ...RateAccountProviders_1.rateAccountProviders],
    })
], RateAccountModule);
exports.RateAccountModule = RateAccountModule;
//# sourceMappingURL=RateAccountModule.js.map