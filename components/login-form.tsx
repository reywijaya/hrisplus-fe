'use client'

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useActionState} from "react";
import {login} from "@/lib/actions";
import {LoginSchema} from "@/lib/schema-auth";

type loginData = z.infer<typeof LoginSchema>;

export default function LoginForm() {

    const [state, loginAction] = useActionState(login, undefined);

    const form = useForm<loginData>({
        resolver: zodResolver(LoginSchema),
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        }
    })

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Card className=''>
                <CardHeader>
                    <CardTitle>HRIS PLUS+ by Brewok Group</CardTitle>
                    <CardDescription>Sign in to your account to access our system.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        {state?.errors?.email && state?.errors?.password &&
                            <p className="text-red-600 mb-4 text-sm">{state.errors.email}</p>}
                        <form action={loginAction} className="flex flex-col gap-4">
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
                            <Button disabled={!form.formState.isValid} type="submit">Log in</Button>
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