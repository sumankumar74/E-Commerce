import { NextResponse } from "next/server";

export function middleware(request) {
    let path = request.nextUrl.pathname;

    const isPublicPath = path === "/login" || path == "/signup";

    const token = request.cookies.get("token")?.value || ""

    if(isPublicPath && token){
        return NextResponse.redirect(new URL(`${path}`, request.nextUrl))
    }
    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }
}

export const config = {
    matcher : ['/admin','/admin/Books/category/insert','/admin/Books/category/manage','/admin/Books/insert','/admin/Books/manage', '/login', '/signup']
}
