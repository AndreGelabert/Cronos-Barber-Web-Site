import type {Metadata} from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Cronos Bar-Ber',
  description: 'Tu barbería, tu segundo hogar',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-[#131313] text-gray-900 dark:text-[#e5e2e1] font-inter antialiased" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
