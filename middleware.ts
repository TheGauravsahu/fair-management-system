// export { auth as middleware } from "@/auth";
import { auth } from "@/auth";

export default auth((req) => {
  const pathname = req.nextUrl.pathname;

  const isProtectedEventRoute =
    pathname.startsWith("/events/") && pathname !== "/events";

  if (!req.auth && isProtectedEventRoute) {
    const newUrl = new URL("/login?redirectTo=events", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (pathname.startsWith("/admin") && req.auth?.user.role !== "admin") {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
