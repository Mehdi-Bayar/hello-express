import UserModel from './user';
import ProfileModel from './profile';
import { getSequelize } from '../providers/sequelize';

const models = {
    User:  UserModel.init(getSequelize()),
    Profile: ProfileModel.init(getSequelize()),
}

Object.values(models)
    .forEach(model => model.associate(models));

const {
    User,
    Profile,
} = models;

export {
    User,
    Profile,
}