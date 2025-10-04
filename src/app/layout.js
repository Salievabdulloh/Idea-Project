import { Provider } from "react-redux";
import "./globals.css";
import { store } from "@/store/store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'flag-icons/css/flag-icons.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>JobNest</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[Inter]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}