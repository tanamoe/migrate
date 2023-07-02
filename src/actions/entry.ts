/** Entry migrations */
import cliProgress from "cli-progress";

import { supabase } from "../lib/supabase";
import { pb } from "../lib/pocketbase";
import { pbType } from "../lib/typeConversion";

export const entryMigrate = async () => {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  let i = 0;

  const { count, error } = await supabase
    .from("publication")
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
        await pb.collection("title").create({
          name: entry.name,
          format: pbType(entry.type),
          old_id: entry.id,
        });

        bar.increment();
      }

    i += 100;

    if (publication?.length == 0) break;
  }

  bar.stop();
};
