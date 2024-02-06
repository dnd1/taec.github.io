import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./common.css";
import "./main.scss";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo lo que nevesitas saber para tu acuario",
  description: "by DND TECH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <p className="flex justify-center">
          by &nbsp; <a href="https://dndtech.co">DND TECH</a> &nbsp;{" "}
          {new Date().getFullYear()}
        </p>
      </body>
    </html>
  );
}
