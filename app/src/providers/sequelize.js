import { Sequelize } from 'sequelize';

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
                { host: '192.168.0.64', username: 'admin', password: 'psltest' },
            ],
            write: { host: '192.168.0.64', username: 'admin', password: 'psltest' }
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
}

export default {
    getSequelize,
};