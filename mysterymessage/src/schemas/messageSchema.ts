import {z} from "zod";

export const messageSchema =z.object({
    content:z
    .string()
    .min(10,{message:"message must be at least 10 characters"})
    .max(50,{message:"message must be at most 50 characters"})
})