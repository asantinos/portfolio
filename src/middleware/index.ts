export function middleware(request) {
    const hostname = request.headers.get('host');
    const [subdomain] = hostname.split('.');
    if (subdomain) {
      request.nextUrl.pathname = `/apps/${subdomain}`;
      return NextResponse.rewrite(request.nextUrl);
    }
  }   