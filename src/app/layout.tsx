import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thymus Physiotherapy",
  description: "",
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
