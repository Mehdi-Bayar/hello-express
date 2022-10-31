import { Model, Sequelize } from 'sequelize';

class Profile extends Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: Sequelize.STRING,
                }
            },
            {
                sequelize,
                modelName: 'profile' 
            },
        );
    }

    static associate(models){
        this.belongsToMany(models.User, {
            through: 'User_Profile',
        });
    }
}

export default Profile;
