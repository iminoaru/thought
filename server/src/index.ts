import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()

import addRoutes from './routes/add'; 
import showRoutes from './routes/show'; 

const app = express();
const port = 3001

app.use(cors());
app.use(express.json());

app.post('/key', async (req: express.Request, res: express.Response) => {

  const secret = req.body.secret
  if (secret + 'gg' == process.env.KEY) {
    res.status(200).send({ message: 'Valid secret' , successSecret : true})
  } else {
    res.status(401).send({ message: 'Invalid secret' , successSecret : false})
  }
})

app.use('/add', addRoutes);
app.use('/show', showRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})