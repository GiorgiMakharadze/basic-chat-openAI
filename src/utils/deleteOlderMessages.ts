import { MAX_TOKENS } from "../globals";
import { context } from "../server";
import { GetContextLength } from "./getContextLength";

export const DeleteOlderMessages = async (): Promise<void> => {
  let contextLength = await GetContextLength();
  while (contextLength > MAX_TOKENS) {
    for (let i = 0; i < context.length; i++) {
      const message = context[i];
      if (message.role !== "system") {
        context.splice(i, 1);
        contextLength = await GetContextLength();
        console.log("New context length: " + contextLength);
        break;
      }
    }
  }
};
