import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import { UserFactory } from './user.model';

const db: any = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = UserFactory(sequelize);

export default db;
