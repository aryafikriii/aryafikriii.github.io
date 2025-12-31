import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Arya Fikriansyah | Software Developer & AI/ML Engineer",
  description:
    "Software Developer at MedcoEnergi E&P Indonesia with expertise in ASP.NET Core, C#, Python, and AI/ML. Specializing in enterprise applications and system modernization.",
  keywords: [
    "Software Developer",
    "AI/ML Engineer",
    "ASP.NET Core",
    "C#",
    "Python",
    "Next.js",
    "TypeScript",
    "React",
    "Machine Learning",
    "Deep Learning",
  ],
  authors: [{ name: "Arya Fikriansyah" }],
  creator: "Arya Fikriansyah",
  publisher: "Arya Fikriansyah",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryafikriii.github.io",
    title: "Arya Fikriansyah | Software Developer & AI/ML Engineer",
    description:
      "Software Developer at MedcoEnergi E&P Indonesia with expertise in ASP.NET Core, C#, Python, and AI/ML.",
    siteName: "Arya Fikriansyah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Fikriansyah | Software Developer & AI/ML Engineer",
    description:
      "Software Developer at MedcoEnergi E&P Indonesia with expertise in ASP.NET Core, C#, Python, and AI/ML.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
