import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/" && request.headers.get("accept")?.includes("text/markdown")) {
    return NextResponse.rewrite(new URL("/index.md", request.url));
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");
  return response;
}

export const config = {
  matcher: "/",
};
