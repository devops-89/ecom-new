import type { Metadata } from "next";
import { geistSans, geistMono } from "@/utils/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "The EcomGuru",
  description: "A result focused E-commerce growth company",
};

import HeroLayout, {
  GlobalProvider,
} from "@/components/layouts/home/HeroLayout";
import Footer from "@/components/widgets/Footer";
import LeftBar from "@/components/widgets/LeftBar";
import Loader from "@/components/widgets/Loader";
import SoundManager from "@/components/widgets/SoundManager";
import AOSInit from "@/components/widgets/AOSInit";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col" suppressHydrationWarning>
        <GlobalProvider>
          <AOSInit />
          <SoundManager />
          <Loader />
          <LeftBar />
          <HeroLayout>{children}</HeroLayout>
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
