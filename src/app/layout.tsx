import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Breeze Wizz</title>
        <script
          type="text/javascript"
          src="https://appf-web-exp-integration-e2e.app.intuit.com/v1/appfabric-web-integration/iframe/script/iife/appf-web-exp-integration-webapp"
        />
        <script>
          {` 
                        const { IntuitWebAppExperience } = globalThis.IntuitWeb;
                        const widget = new IntuitWebAppExperience();
                        (
                          async () => widget.init({
                              namespace: "embedded-financing",
                              url: new URL(
                                  "https://financing-e2e.app.intuit.com/embedded-financing?darwinPackageVersion=3.2.0-alpha.73bf954&driToken=eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjay1pbnRlcm5hbCIsImNyZWF0ZWRfYnkiOiJlbnYtdG9vbCIsImRhdGEiOnsiZGVwbG95X3NlZ21lbnQiOiJnai1pbnR1aXQtZGVtby1idyJ9LCJlbnYiOiJDa1Rlc3RTZWdtZW50IiwiZXhwIjoxNzQwNDk5NTA4LCJpYXQiOjE3MzkyOTk1MDgsImlzcyI6ImVudi10b29sIiwianRpIjoiYzMwMWI5Y2QtYmZhYy00OTU5LWFjY2EtNWM1MDA1NDk0ODY5In0."
                              ),
                              style: {
                                  height: "100%",
                                  width: "100%",
                                  "border-color": "red",
                              },
                          })
                        )();
                        globalThis.IntuitWebAppExperience = widget;
                      `}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {<Header />}
        {children}
      </body>
    </html>
  );
}
