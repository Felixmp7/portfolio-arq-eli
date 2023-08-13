import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from './components/Footer';
import { Navbar } from './components/navbar/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'EAGV | ARQ',
    description: 'Profesional Portfolio',
    icons: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicons/favicon-32x32.png'
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicons/favicon-16x16.png'
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: '/favicons/apple-touch-icon.png'
        },
        {
            rel: 'android-chrome-icon',
            sizes: '192x192',
            url: '/favicons/android-chrome-192x192.png'
        },
        {
            rel: 'android-chrome-icon',
            sizes: '512x512',
            url: '/favicons/android-chrome-512x512.png'
        }
    ],
    manifest: '/public/favicons/site.webmanifest'
};

export default function RootLayout({
    children
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className='container container-bg relative'>
                    <header className='absolute top-0 left-0 right-0 px-container text-white'>
                        <Navbar />
                    </header>
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
