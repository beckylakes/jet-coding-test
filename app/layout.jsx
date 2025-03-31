import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "JET Coding Test",
  description: "Coding test for 2025 cohort by Rebecca Lake",
  icons: {
    icon: 'assets/sample-logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" nighteye="disabled">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
