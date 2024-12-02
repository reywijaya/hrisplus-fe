import "server-only";
import {SignJWT} from "jose";
import {cookies} from "next/headers";

const authSecret = process.env.AUTH_SECRET;
//todo: check again this encode method
const encodedKey = new TextEncoder().encode(authSecret);

export async function createSession(jwtToken: string) {
    const expiresAt = new Date(Date.now() + (24 * 3600 * 1000)); // 1 day
    //const session = await encrypt({userId, expiresAt});

    (await cookies()).set("session", jwtToken, {
        httpOnly: true,
        secure: true,
        expires: expiresAt
    })
}

export async function deleteSession() {
    (await cookies()).delete("session");
}

type SessionPayload = {
    userId: string;
    expiresAt: Date;
}

// for testing purpose
export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime("1d")
        .sign(encodedKey)
}

export async function decrypt(session: string | undefined = "") {
    try {
        //const {payload} = await jwtVerify(session, encodedKey, {algorithms: ["HS256"]});
        return JSON.parse(atob(session.split(".")[1]));
    } catch (error) {
        console.log(error);
        console.log("Failed to verify session");
    }
}