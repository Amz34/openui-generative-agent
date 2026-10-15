import OpenAI from "openai";
import { requiredEnv } from "./env";

export const client = new OpenAI({
  apiKey: requiredEnv("THESYS_API_KEY"),
  baseURL: "https://api.thesys.dev/v1/embed",
});
