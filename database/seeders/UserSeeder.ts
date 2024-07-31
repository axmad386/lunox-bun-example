import Seeder from "./Seeder";
import { DB } from "@lunoxjs/drizzle";
import bcrypt from "bcrypt";
import { users } from "database/schema";
import { sql } from "drizzle-orm";
class UserSeeder extends Seeder {
  public async run() {
    const query = sql`DELETE from ${users}`;
    DB.run(query);
    await DB.insert(users).values({
      id: 1,
      username: "user",
      email: "user@example.mail",
      first_name: "John",
      last_name: "Doe",
      password: bcrypt.hashSync("password", 10),
    });
  }
}
export default UserSeeder;
