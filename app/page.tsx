'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {toast} from "@/hooks/use-toast";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

const FormSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
})

export default function LoginPage() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Sign in success",
    })
  }

  return (
      <div className='w-screen h-screen flex items-center justify-center'>
        <Card className=''>
          <CardHeader>
            <CardTitle>HRIS PLUS+ by Brewok Group</CardTitle>
            <CardDescription>Sign in to your account to access our system.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@mail.com" {...field}/>
                          </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your password" {...field} />
                          </FormControl>
                        </FormItem>
                    )}
                />
                <a href="#" className="text-xs">Forgot password?</a>
                <Button type="submit">Sign In</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <p className="text-xs">Copyright HRIS PLUS+ 2024</p>
          </CardFooter>
        </Card>
      </div>
  )
}