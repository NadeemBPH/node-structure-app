import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import sequelize from './config/database';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('Unable to connect to DB:', err));
