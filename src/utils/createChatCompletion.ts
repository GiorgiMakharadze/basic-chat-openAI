import OpenAI from "openai";
import { Openai } from "..";

export const context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: "You are a helpful chatbot",
  },
];

export const CreateChatCompletion = async () => {
  try {
    const response = await Openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: context,
    });
    const responseMessage = response.choices[0].message;
    context.push({
      role: "assistant",
      content: responseMessage.content,
    });
    console.log(
      `${response.choices[0].message.role}: ${response.choices[0].message.content}`
    );
  } catch (error) {
    console.error("Error:", error);
  }
};
