import {z} from "zod";

export const loginSchema = z.object({
  username: z
    .string({
      message: "Обязательное поле",
    }),
  // .min(2, {
  //   message: "Username должен содержать минимум 2 символа",
  // }),
  password: z
    .string({
      message: "Обязательное поле",
    })
  // .min(2, {})
})