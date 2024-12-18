import "./globals.css";
import {Rubik, Kode_Mono} from "next/font/google";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rubik",
});

const kodeMono = Kode_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kodeMono",
}) 

export const metadata = {
  title: "Hualiang Zhao Portfolio",
  description: "Portfolio of Hualiang Zhao",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${rubik.variable} ${kodeMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
