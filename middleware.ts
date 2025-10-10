import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Define the locales you support and the default fallback
const locales = ["en-US", "fr-FR", "sw-KE"];
const defaultLocale = "en-US";

// Helper function to detect best locale from request
function getLocale(request: { headers: { get: (arg0: string) => string; }; }) {
  // Get the Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";

  // Use Negotiator to parse accepted languages
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();

  // Match against supported locales
  return match(languages, locales, defaultLocale);
}

export function middleware(request: { nextUrl?: any; headers?: { get: (arg0: string) => string; }; }) {
  const { pathname } = request.nextUrl;

  // Skip if the path already includes a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return; // Continue without redirect
  }

  // Detect best locale
  const locale = getLocale(request);

  // Rewrite path with detected locale
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static, etc.)
    "/((?!_next|api|static|favicon.ico|assets).*)",
  ],
};
