import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { SettingsProvider } from "@/context/SettingsContext";

const inter = Inter({ subsets: ["latin"] });

// Runs before paint to set the theme class and avoid a flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('farm_city_theme');
    if (!t) {
      t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (t === 'dark') document.documentElement.classList.add('dark');
    var l = localStorage.getItem('farm_city_language');
    if (l === 'en' || l === 'sw') document.documentElement.lang = l;
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "Farm City | Agricultural E-commerce & Seedling Supply Kenya",
  description: "Fresh Produce. Quality Seedlings. Delivered. Helping households, businesses, and farmers access quality agricultural products conveniently across Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col min-h-screen antialiased`}>
        <SettingsProvider>
          <CartProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingActions />
            <CartDrawer />
          </CartProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
