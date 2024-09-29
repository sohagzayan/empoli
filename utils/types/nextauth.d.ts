import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: number;
    email: string;
    image: string;
    name: string;
    role: string;
  }

  interface Session extends DefaultSession {
    user: any;
  }
}
