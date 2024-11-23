'use client'

import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardHeader} from "@/shared/ui/card";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import Link from "next/link";
import {path} from "@/config/routing";
import {registrationSchema} from "@/features/registration/model/validation";

export default function RegistrationCard() {
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      birthday: ''
    }
  })
  
  function onSubmit(values: z.infer<typeof registrationSchema>) {
    
    console.log(values)
  }
  
  return <div className="w-full h-full flex items-center justify-center">
    <Card
      className="bg-[rgba(50, 50, 50, 1)] border-none px-8 py-12 sm:px-16 sm:py-36 space-y-24 backdrop-blur-3xl ">
      <CardHeader className='p-0 text-5xl  mb-6 w-[300px] sm:w-[500px] text-center'>
        Регистрация
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
            
            name="birthday"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Дата рождения' type='date' {...field}
                         className='bg-[#ECECEC] px-4 py-6 text-black'/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            
            name="email"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Почта" {...field} className='bg-[#ECECEC] px-4 py-6 text-black'/>
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            
            name="fullName"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="ФИО" {...field} className='bg-[#ECECEC] px-4 py-6 text-black'/>
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
            <Button type="submit"
                    className='w-full py-6 bg-[#374254] text-[#ECECEC] text-lg mb-1 mt-16'>Зарегестрироваться</Button>
            <div className='text-sm flex justify-between'>
              <div className='gap-2'>
                Уже есть аккаунт? {' '}
                <Link href={path.auth.login} className='underline'>
                  Войти
                </Link>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  </div>
}