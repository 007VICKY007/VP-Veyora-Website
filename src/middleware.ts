import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "ADMIN",
    },
    pages: {
      signIn: "/admin/login",
    }
  }
);

// Match all admin routes except login
export const config = {
  matcher: [
    "/admin/dashboard",
    "/admin/leads",
    "/admin/services",
    "/admin/portfolio",
    "/admin/blog",
    "/admin/careers",
    "/admin/testimonials",
    "/admin/pricing",
    "/admin/settings"
  ],
};
