import { ModuleServiceInitializeOptions } from "@medusajs/types";
import { TSMigrationGenerator } from "@mikro-orm/migrations";
export { TSMigrationGenerator };
export declare function mikroOrmCreateConnection(database: ModuleServiceInitializeOptions["database"] & {
    connection?: any;
}, entities: any[], pathToMigrations: string): Promise<import("@mikro-orm/core").MikroORM<import("@mikro-orm/postgresql").PostgreSqlDriver>>;
