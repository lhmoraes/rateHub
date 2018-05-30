import { Sequelize }   from 'sequelize-typescript';
import { RateAccount } from '../account/model/RateAccount';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'ratehub',
      });
      sequelize.addModels([RateAccount]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
