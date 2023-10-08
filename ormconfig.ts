

import { User } from 'src/entities/user.entity';
import { TaxBracket } from 'src/entities/taxbrackets.entity';
import { UserTaxData } from 'src/entities/usertax-data.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User, TaxBracket, UserTaxData],
  synchronize: true,
};

export default config;
