import {z} from "zod";

export const registrationSchema = z.object({
  username: z
    .string({
      message: "Обязательное поле",
    }),
  // .min(2, {
  //   message: "Username должен содержать минимум 2 символа",
  // }),
  fullName: z
    .string({
      message: "Обязательное поле",
    }),
  birthday: z
    .string({
      message: "Обязательное поле",
    }),
  email: z
    .string({
      message: "Обязательное поле",
    })
    .email({
      message: 'Неверный формат почты '
    })
  ,
  password: z
    .string({
      message: "Обязательное поле",
    }),
  // .min(2, {}),
})