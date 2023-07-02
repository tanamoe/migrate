import PocketBase from 'pocketbase';

if (!Bun.env.POCKETBASE_URL) throw new Error("Pocketbase URL undefined");

export const pb = new PocketBase(Bun.env.POCKETBASE_URL);
