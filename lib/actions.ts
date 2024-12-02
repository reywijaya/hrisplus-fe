'use server'

import {createSession, deleteSession} from "@/lib/session";
import {redirect} from "next/navigation";
import {LoginSchema} from "@/lib/schema-auth";
import {fetchLoginData, fetchUserData} from "@/lib/axios-service";

/**
 * THIS IS THE ACTIONS FO LOGIN FORM
 * */

// TODO: CHECK AGAIN THIS FUNCTION LATER
export async function login(prevState: any, formData: FormData) {

    // validate form data with zod
    const result = LoginSchema.safeParse(Object.fromEntries(formData));
    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }
    const {email, password} = result.data;

    // fetch data users first
    const userData = await fetchUserData();
    // extract user data by role, just example
    // const adminRole = userData.find((user) => user.userRole === "admin");
    // const userRole = userData.find((user) => user.userRole === "user");
    // todo: this logic need to be updated later
    if (email !== userData.userEmail || password !== userData.userPassword) {
        return {
            errors: {
                email: ["Invalid email or password"],
                password: ["Invalid email or password"],
            }
        }
    }

    /**
     * in actual implementation, it should be post the data to the server
     * then, server validate the data, and return the response with jwt token
     * */

    // fetch login api
    const loginData = await fetchLoginData();
    // insert jwt token to create session
    await createSession(loginData.token);
    redirect("/dashboard");

}

export async function logout() {
    await deleteSession();
    redirect("/");
}