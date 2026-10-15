import * as Observability from "@openuidev/observability-cloud";

Observability.init({
  apiKey: process.env.NEXT_PUBLIC_THESYS_CLIENT_KEY || "",
  debug: true,
});

export { Observability };
