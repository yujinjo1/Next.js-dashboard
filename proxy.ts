import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
// NextAuth의 auth 함수를 가져옵니다.
const { auth } = NextAuth(authConfig);

// 에러 해결을 위해 default export 함수를 명시적으로 작성합니다.
export default auth;
 
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};