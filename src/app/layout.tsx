import type { Metadata } from "next";
import Script from "next/script";
import { Roboto } from "next/font/google";
import "./common.css";
import "./main.scss";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo lo que necesitas saber para tu acuario",
  description: "by DND TECH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="mailer-lite">
          {`(function(w,d,e,u,f,l,n){
          w[f]=w[f]||function(){(w[f].q=w[f].q||[])
        .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
        n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
        (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
        ml('account', '733625');         `}
        </Script>
      </head>
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
