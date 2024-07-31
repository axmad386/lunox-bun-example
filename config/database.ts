import {} from "@lunoxjs/drizzle";
import type { DatabaseConfig } from "@lunoxjs/drizzle/contracts";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { migrate as migrator } from "drizzle-orm/mysql2/migrator";
import sqlite from "bun:sqlite";
import * as schema from "database/schema";

const dbConfig = {
  drizzle() {
    const pool = new sqlite(root_path("database/database.sqlite"));
    return drizzle(pool, { schema });
  },
  migrator,
} satisfies DatabaseConfig;

declare module "@lunoxjs/drizzle" {
  interface Drizzle extends ReturnType<typeof dbConfig.drizzle> {}
}

export default dbConfig;
