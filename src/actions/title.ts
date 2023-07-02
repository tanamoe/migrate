/** Title migrations */
import cliProgress from "cli-progress";

import { supabase } from "../lib/supabase";
import { pb } from "../lib/pocketbase";
import { pbPublisher, pbStatus, pbType } from "../lib/typeConversion";

export const titleMigrate = async () => {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  let i = 0;

  const { count, error } = await supabase
    .from("series")
    .select("*", { count: "exact", head: true });

  if (error) throw new Error(error.message);
  if (!count) throw new Error(`count is null`);

  bar.start(count, 0);

  while (true) {
    const { data: publication, error } = await supabase
      .from("series")
      .select("*")
      .range(i, i + 99);

    if (error) throw new Error("Something happened: " + error.message);

    if (publication)
      for (let entry of publication) {
        try {
          const title = await pb.collection("title").create({
            name: entry.name,
            format: pbType(entry.type),
            old_id: entry.id,
          });

          await pb.collection("release").create({
            title: title.id,
            name: "Bản in đầu",
            publisher: pbPublisher(entry.publisher),
            status: pbStatus(entry.status),
          });
        } catch (err) {
          console.error(err);
        } finally {
          bar.increment();
        }
      }

    i += 100;

    if (publication?.length == 0) break;
  }

  bar.stop();
};

export const titleDrop = async () => {
  const records = await pb.collection("title").getFullList({ batch: 200 });

  for (let record of records) {
    await pb.collection("title").delete(record.id);
  }
};

export const releaseDrop = async () => {
  const records = await pb.collection("release").getFullList();

  for (let record of records) {
    await pb.collection("release").delete(record.id);
  }
};
