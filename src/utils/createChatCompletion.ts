import { MAX_TOKENS } from "../globals";
import { openAIClient, context } from "../server";
import { DeleteOlderMessages } from "./deleteOlderMessages";

export const CreateChatCompletion = async (): Promise<void> => {
  try {
    const response = await openAIClient.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: context,
    });
    const responseMessage = response.choices[0].message;
    context.push(responseMessage);
    if (response.usage && response.usage.total_tokens > MAX_TOKENS) {
      DeleteOlderMessages();
    }
    console.log(
      `${response.choices[0].message.role}: ${response.choices[0].message.content}`
    );
  } catch (error) {
    console.error("Error:", error);
  }
};
