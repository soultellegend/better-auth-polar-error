import { createAuthClient } from "better-auth/react"
import { polarClient } from "@polar-sh/better-auth";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
    plugins: [polarClient()], // Polar plugin for client-side https://www.better-auth.com/docs/plugins/polar
})
