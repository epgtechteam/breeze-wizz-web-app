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
                                  "https://financing-e2e.app.intuit.com/embedded-financing"
                              ),
                              props: {
                                  financingApplicationInfo: {
                                      loanAmount: 10000,
                                      loanPurpose: "HOME_IMPROVEMENT",
                                  },
                                  consumerInfo: {
                                      email: "csepdteam@gmail.com",
                                  },
                              },
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
