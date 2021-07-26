import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 4000;

routes(app);

app.get('/', (req, res) => 
  res.send(`Hello World! ${PORT}`)
);

app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}`)
);

