import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";



const client = new Client({
    connectionString: process.env.DATABASE_URL,

})
// const main = async () => {
//     await client.connect();
//     console.log("Connected to database");

//     await client.end()
//     console.log("Disconnected from database");
// }
const db = drizzle(client);

// main().catch(console.error);

export default db;
