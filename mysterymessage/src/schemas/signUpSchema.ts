import {z} from 'zod';
export const usernameValidation =z 
    .string()
    .min(2,'username must be at least 2 characters long')
    .max(20,'username must be at least 20 characters long')
    .regex(
        /^[a-zA-Z0-9_]+$/,
        'username must only contain letters and numbers'
    )


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email('invalid email'),
    password: z.string().min(8,'password must be at least 8 characters long'),
    })