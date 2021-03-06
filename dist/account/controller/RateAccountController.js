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
const AccountService_1 = require("../../account/service/AccountService");
let RateAccountController = class RateAccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    crawler() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.crawler();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.findAll();
        });
    }
    findByRates(rateType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.accountService.findByRateType(rateType);
        });
    }
};
__decorate([
    common_1.Get("crawler"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RateAccountController.prototype, "crawler", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RateAccountController.prototype, "findAll", null);
__decorate([
    common_1.Get(':rateType' + '/rates'),
    __param(0, common_1.Param('rateType')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RateAccountController.prototype, "findByRates", null);
RateAccountController = __decorate([
    common_1.Controller('accounts'),
    __metadata("design:paramtypes", [AccountService_1.AccountService])
], RateAccountController);
exports.RateAccountController = RateAccountController;
//# sourceMappingURL=RateAccountController.js.map