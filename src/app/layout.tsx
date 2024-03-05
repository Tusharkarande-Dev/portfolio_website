import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import { ToastContainer } from "react-toastify";

const ss3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="mt-20 scroll-smooth" suppressHydrationWarning lang="en">
      <body className={ss3.className}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}