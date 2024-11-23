import type {Metadata} from "next";
import {Manrope} from 'next/font/google'
import "./globals.css";
import {TailwindIndicator} from "@/shared/components/tailwind-indicator";


export const metadata: Metadata = {
  title: "Cinema Project",
  description: "Course work, frontend",
};

const manrope = Manrope({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-manrope',
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full w-full'>
    <body
      className={`${manrope.className} antialiased dark h-full w-full`}
    >
    {children}
    <TailwindIndicator/>
    </body>
    </html>
  );
}
