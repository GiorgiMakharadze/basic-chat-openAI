import dotenv from "dotenv";

dotenv.config();

export const MAX_TOKENS = parseInt(process.env.MAX_TOKENS || "700", 10);
export const API_KEY = process.env.OPENAI_API_KEY;
