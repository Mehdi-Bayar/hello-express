import express from 'express';
import * as dotenv from 'dotenv';
import {User, Profile} from './app/src/models';

dotenv.config();

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

// App
const app = express();
app.get('/', async (req, res) => {
  await User.sync({force: true});
  await Profile.sync({force: true});

  await User.create({
    firstName: 'Mehdi',
    lastName: 'Bayar',
  });

  await User.create({
    firstName: 'Phyo',
    lastName: 'Ko',
  });

  const user = await User.findOne({
    where: {
      lastName: 'Ko',
    },
  });

  res.send(`Hello ${user.firstName}`);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
