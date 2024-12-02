import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {decrypt} from "@/lib/session";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/"]

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoutes = protectedRoutes.includes(path);
    const isPublicRoutes = publicRoutes.includes(path);

    // get jwt token in cookie
    const cookie = (await cookies()).get("session")?.value
    const session = await decrypt(cookie);


    if (isProtectedRoutes && !session) {
        //todo: handle another routing possibilities
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    if (isPublicRoutes && session) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}