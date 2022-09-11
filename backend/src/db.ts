import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'oishi',
    password: 'test',
    database: 'crud',
    synchronize: true,
    logging: true,
    entities: [User],
});
