import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Stock Platform Compare",
  description: "Compare the best U.S. stock trading platforms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />

        <main className="max-w-7xl mx-auto px-12 py-12">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
