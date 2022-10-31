import { Model, Sequelize } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                firstName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                lastName: {
                    type: Sequelize.STRING,
                }
            },
            {
                sequelize,
                modelName: 'user'
            },
        );
    }

    static associate(models) {
        this.belongsToMany(models.Profile, { 
            through: 'User_Profile',
        });
    }
}

export default User;
