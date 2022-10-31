import { createUser, getAllUsers } from './app/src/dao/UserDAO';
import express from 'express';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', async (req, res) => {
  const userList = await getAllUsers();
  res.send(userList);
});

app.get('/createUser', async (req, res) => {
  const user = { firstName: 'Phyo', lastName: 'Ko' };
  const isCreated = createUser(user);
  if(isCreated)
    res.send("User has created");
  else
    res.send("User has not created")
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
