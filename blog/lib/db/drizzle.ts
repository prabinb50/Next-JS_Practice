import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import 'dotenv/config';
import * as schema from "@/lib/db/schema";

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined')
}

export const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client, { schema });
