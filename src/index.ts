import OpenAI from "openai";
import dotenv from "dotenv";
import { context, CreateChatCompletion } from "./utils/createChatCompletion";

dotenv.config();

export const Openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

process.stdin.addListener("data", async (input: string) => {
  const userInput = input.toString().trim();
  context.push({
    role: "user",
    content: userInput,
  });
  await CreateChatCompletion();
});
