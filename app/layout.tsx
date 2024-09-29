import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/redux/provider';
import 'remixicon/fonts/remixicon.css';
import Provider from '@/context/client-provider';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authOptions';
import 'tailwindcss/tailwind.css';
import { TooltipProvider } from '@/components/ui/tooltip';
const inter = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Job on board',
  description: 'Generated by create next app',
  icons: {
    icon: './favicon.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.variable}>
        <Provider session={session}>
          <TooltipProvider>
            <ReduxProvider>
              <div>{children}</div>
            </ReduxProvider>
          </TooltipProvider>
        </Provider>
      </body>
    </html>
  );
}
