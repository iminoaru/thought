
import { express , Router } from 'express';
import cors from 'cors';

const addRoutes = './routes/add.ts';
const showRoutes = './routes/show.ts';

const app = Router();

app.use(cors());
app.use(express.json());

const port = 3001;

app.use('/add', addRoutes);
app.use('/show', showRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})