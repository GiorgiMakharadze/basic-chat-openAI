import OpenAI from "openai";
import { CreateChatCompletion } from "./utils/createChatCompletion";
import { encoding_for_model } from "tiktoken";
import { API_KEY } from "./globals";

export const Openai = new OpenAI({
  apiKey: API_KEY,
});

export const context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: "You are a helpful chatbot",
  },
];

export const encoder = encoding_for_model("gpt-3.5-turbo");

process.stdin.addListener("data", async (input: Buffer) => {
  const userInput = input.toString().trim();
  context.push({
    role: "user",
    content: userInput,
  });
  await CreateChatCompletion();
});
