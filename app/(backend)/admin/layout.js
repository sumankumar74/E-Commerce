import { Inter } from "next/font/google";
import "../../globals.css";
import AdminHeader from "@/app/components/AdminHeader";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BookShop",
  description: "Created By Suman Kumar",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminHeader/>
        {children}
        <Toaster position="top-right"/>
        </body>
    </html>
  );
}
