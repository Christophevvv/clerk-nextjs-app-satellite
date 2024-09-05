import { clerkMiddleware } from "@clerk/nextjs/server";

// This Middleware protects every route by default.
// See https://clerk.com/docs/references/nextjs/clerk-middleware for more information about configuring your Middleware
export default clerkMiddleware(
  async (auth) => {
    auth().protect();
  },
  {
    debug: true,
    isSatellite: true,
    signInUrl: "https://platform.keuringsnetwerk.be/inloggen",
    signUpUrl: "https://platform.keuringsnetwerk.be/registreren",
    domain: "duodecim.be",
  }
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
