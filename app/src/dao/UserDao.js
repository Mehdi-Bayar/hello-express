import { mongoClient } from './Client';

export const createUser = async (user) => {
    try {
        const database = mongoClient.db('hello');
        const users = database.collection('users');
        await users.insertOne(user);
        return true;
      } catch (ex) {
        console.log(ex);
        return false;
      }
}

export const getAllUsers = async () => {
    try {
        const database = mongoClient.db('hello');
        const users = database.collection('users');
        const cursor = users.find();
        const results = await cursor.toArray();
        return results;
      } catch (ex) {
        console.log(ex);
      }
}
