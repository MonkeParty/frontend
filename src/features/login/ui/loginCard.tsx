'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form"
import {Input} from "@/shared/ui/input"
import {Card, CardHeader} from "@/shared/ui/card";
import {Button} from "@/shared/ui/button";

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import Link from "next/link";
import {loginSchema} from "@/features/login/model/validation";
import {path} from "@/config/routing";


export default function LoginCard() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  })
  
  function onSubmit(values: z.infer<typeof loginSchema>) {
    
    console.log(values)
  }
  
  return <div className="w-full h-full flex items-center justify-center">
    <Card
      className="bg-[rgba(50, 50, 50, 1)] border-none px-8 py-12 sm:px-16 sm:py-36 space-y-24 backdrop-blur-3xl ">
      <CardHeader className='p-0 text-5xl  mb-6 w-[300px] sm:w-[500px] text-center'>
        Авторизация
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-[460px] mx-auto">
          <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Имя пользователя" {...field} className='bg-[#ECECEC] px-4 py-6 text-black'/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            
            name="password"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Пароль" {...field} className='bg-[#ECECEC] px-4 py-6 text-black'/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <div>
            <Button type="submit" className='w-full py-6 bg-[#374254] text-[#ECECEC] text-lg mb-1 mt-16'>Войти</Button>
            <div className='text-sm flex justify-between'>
              <div className='gap-2'>
                Еще нет аккаунта? {' '}
                <Link href={path.auth.registration} className='underline'>
                  Создать
                </Link>
              </div>
              <Link href='#' className='hover:underline'>
                Забыли пароль?
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  </div>
}