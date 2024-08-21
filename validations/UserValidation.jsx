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


// import * as yup from 'yup';

// const userSchema = yup.object().shape({
//     email: yup.string().required().email(),
//     password: yup.string().required().min(4).max(10),
//     name: z.string().required(),
//     birthdate: {
//         month: yup.string().required(),
//         day: yup.string().required(),
//         year: yup.string().required()
//     },
//     zipcode: yup.string().required(),
//     gender: yup.string().required(),
// });

// export default userSchema;

