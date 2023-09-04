import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext"
// import Footer from "@/components/Footer"

export const metadata = {
  title: "SPJ LPSE",
  description: "Sistem Informasi SPJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
