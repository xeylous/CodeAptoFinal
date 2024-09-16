import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

let urll = "https://www.codeapto.com/ai-native";
let ttle = "AI-Native Solutions for Modern Businesses - CodeApto";
let des = "CodeApto's AI-native solutions integrate artificial intelligence seamlessly into business operations. Learn how we help businesses enhance efficiency, automation, and customer experiences.";
let keywrd = "AI-native solutions, artificial intelligence, business operations, enhance efficiency, automation, customer experiences";

export const metadata = {
  title: ttle,
  description: des,
  url: urll,
  generator: 'Next.js',
  applicationName: 'CodeApto',
  referrer: 'origin-when-cross-origin',
  keywords: keywrd,
  authors: [{ name: 'Vicky' }, { name: 'Vicky', url: 'https://www.codeapto.com' }],
  colorScheme: 'dark',
  themeColor: 'black',
  creator: 'Vicky',
  publisher: 'CodeApto',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(urll),
  alternates: {
    canonical: urll,
    languages: {
      'en-US': urll,
    },
  },
  locale: 'en_US',
  type: 'website',
  openGraph: {
    images: '/Logo.wepg',
    title: ttle,
    description: des,
  },
  icons: {
    icon: '/Logo.wepg',
    shortcut: '/Logo.wepg',
    apple: '/Logo.wepg',
    other: {
      rel: 'Logo',
      url: '/Logo.wepg',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: ttle,
    description: des,
    siteId: 'CodeApto',
    creator: 'CodeApto',
    creatorId: 'CodeApto',
    images: ['/Logo.wepg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
