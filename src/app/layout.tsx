import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Mailbox from "@/components/Footer/Mailbox";
import Footer from "@/components/Footer/Footer";
import { ToastProvider } from "@/components/Toastify/ToastProvider";
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});


export const metadata: Metadata = {
  title: {
    template: "%s – Styla Online Store |",
    default: "Styla Online Store | Your Favourite Online Shop.",
  },
  description:
    "Your Favourite Online Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body
      
      className={`${jost.variable} ${jost.className} antialiased`}>
        <ToastProvider>
        <Header />
        {children}
        <Mailbox/>
        <Footer/>
        </ToastProvider>
      </body>
    </html>
  );
}
