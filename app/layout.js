import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import LoginNavbar from "@/components/shared/loginNavbar/LoginNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fauget Music",
  description: "Fauget Music Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-bg`}>
        <div className="flex">
          <div className="w-72">
            <Navbar />
          </div>
          <div style={{ width: "calc(100% - 288px)" }} className="py-12 px-14 text-white">
            <LoginNavbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
