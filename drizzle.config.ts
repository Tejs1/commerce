import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./server/db/schema.ts",
  out: "./server/db/generated",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["nuecomm_*"],
} satisfies Config;
