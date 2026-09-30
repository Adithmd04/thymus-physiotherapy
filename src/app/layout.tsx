import type { Metadata } from "next";
import "./globals.css";
import { APP_NAME } from "@/constants";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "",
  icons: {
    apple: "/images/apple-touch-icon.png",
    icon: [
      {
        url: "/images/thymus-favicon-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/thymus-favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/thymus-favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth font-[Inter,system-ui,sans-serif] antialiased"
    >
      <body className="bg-white text-[#0f172a] leading-[1.6] pb-20 min-[901px]:pb-0">
        {children}
      </body>
    </html>
  );
}
