import {Model, Sequelize} from 'sequelize';

/**
 * User Model
 */
class User extends Model {
  /**
   * Init function
   *
   * @param {*} sequelize
   * @return {void}
   */
  static init(sequelize) {
    return super.init(
        {
          firstName: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          lastName: {
            type: Sequelize.STRING,
          },
        },
        {
          sequelize,
          modelName: 'user',
        },
    );
  }

  /**
   * @param {*} models
   */
  static associate(models) {
    this.belongsToMany(models.Profile, {
      through: 'User_Profile',
    });
  }
}

export default User;
