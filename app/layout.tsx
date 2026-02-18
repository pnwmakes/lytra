import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://lytra-learning.netlify.app'),
    title: 'Lytra Learning',
    description: 'Education that restores. Careers that last.',
    applicationName: 'Lytra Learning',
    alternates: {
        canonical: '/',
    },
    icons: {
        icon: [{ url: '/logo.png', type: 'image/png' }],
        shortcut: ['/logo.png'],
        apple: [{ url: '/logo.png', type: 'image/png' }],
    },
    openGraph: {
        type: 'website',
        url: '/',
        siteName: 'Lytra Learning',
        title: 'Lytra Learning',
        description: 'Education that restores. Careers that last.',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'Lytra Learning - Education that restores. Careers that last.',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lytra Learning',
        description: 'Education that restores. Careers that last.',
        images: ['/twitter-image'],
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
