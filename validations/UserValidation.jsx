import {z} from 'zod';

const userSchema = z.object({
    email: z.string({message: "Please enter a valid email address"}).email().trim(),
    password: z.string().min(6, {message: "Please enter a valid password"}).trim(),
    name: z.string({message: "Please enter a valid name"}).min(3).trim(),
    birthdate: {
        month: z.number({message: "Required"}).int(),
        day: z.number({message: "Required"}).int(),
        year: z.number({message: "Required"}).int(),
    },
    zipcode: z.string({message: "Please enter a valid zip code"}).trim(),
    gender: z.enum(['male', 'female', 'non-binary', 'other'], {message: "Required"})
});

export default userSchema;


