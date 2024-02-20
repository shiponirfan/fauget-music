import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fauget Music",
  description: "Fauget Music Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="w-2/12">
            <Navbar />
          </div>
          <div className="w-10/12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
