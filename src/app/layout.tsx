import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import clsx from "clsx";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetaData(): Promise<Metadata>{
  const client = createClient(); 
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-ferngreen-50 text-ferngreen-100">
      
      <body className={clsx(urbanist.className, "relative min-h-screen")}>
      <Header />
        {children}
        <Footer />
        <div className = "absolute inset-0 -z-50 max-h-screen background-gradient"></div>
        <div className = "absolute pointer-events-none inset-0 -z-40 h-full bg-[url('/noisetexture.jpeg')] opacity-80 mix-blend-darken">
        </div>

        <div className="h-[500vh]"></div>
        </body>
        <PrismicPreview repositoryName={repositoryName}/>
    </html>
  );
}
