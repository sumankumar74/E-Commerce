import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookShop.com",
  description: "Created By Suman Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Toaster position="top-right"/>
        </body>
    </html>
  );
}
