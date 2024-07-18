import { context, encoder } from "../server";

export const GetContextLength = async (): Promise<number> => {
  let length = 0;
  context.forEach((message) => {
    if (typeof message.content === "string") {
      length += encoder.encode(message.content).length;
    } else if (Array.isArray(message.content)) {
      message.content.forEach((messageContent) => {
        if (messageContent.type === "text") {
          length += encoder.encode(messageContent.text).length;
        }
      });
    }
  });
  return length;
};
