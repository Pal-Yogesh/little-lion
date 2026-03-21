import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookTourProvider } from "@/components/BookTourModal";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Little Lion Early Learning | Childcare in Wahroonga",
  description: "Trusted, quality childcare in Wahroonga. Supporting your child's early learning journey with a nurturing, play-based curriculum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Loader />
        <BookTourProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </BookTourProvider>
      </body>
    </html>
  );
}
