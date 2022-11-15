import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
let sequelizeInstance;

export const getSequelize = () => {
  if (sequelizeInstance) {
    return sequelizeInstance;
  }

  const warningFn = (msg) => {
    console.log(msg);
  };

  sequelizeInstance = new Sequelize({
    dialect: 'postgres',
    database: 'hello-express',
    port: 5432,
    replication: {
      read: [
        {
          host: process.env.DB_READ_HOST,
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        },
      ],
      write: {
        host: process.env.DB_WRITE_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
      },
    },
    retry: {
      max: 3,
      timeout: 1000,
      match: [
        Sequelize.ConnectionError,
      ],
      report: warningFn,
      name: 'Database Connection',
    },
  });

  return sequelizeInstance;
};

export default {
  getSequelize,
};
