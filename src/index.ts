import { releaseDrop, titleDrop, titleMigrate } from "./actions/title";
import { pb } from "./lib/pocketbase";

if (!Bun.env.ADMIN_EMAIL || !Bun.env.ADMIN_PASSWORD)
  throw new Error("Admin credential(s) undefined");

try {
  await pb.admins.authWithPassword(Bun.env.ADMIN_EMAIL, Bun.env.ADMIN_PASSWORD);

  //   await titleDrop();
  //   await releaseDrop();
  await titleMigrate();
} catch (err) {
  console.error(`Something went wrong, details: ${err}`);
}
