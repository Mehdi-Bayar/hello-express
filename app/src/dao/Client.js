import { MongoClient } from 'mongodb';
const uri = "mongodb://adminuser:password123@192.168.0.74?retryWrites=true";
export const mongoClient = new MongoClient(uri);
