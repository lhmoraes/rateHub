"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const RateAccount_1 = require("../account/model/RateAccount");
exports.databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: () => __awaiter(this, void 0, void 0, function* () {
            const sequelize = new sequelize_typescript_1.Sequelize({
                operatorsAliases: false,
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'ratehub',
            });
            sequelize.addModels([RateAccount_1.RateAccount]);
            yield sequelize.sync();
            return sequelize;
        }),
    },
];
//# sourceMappingURL=DatabaseProviders.js.map