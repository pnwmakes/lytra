import { ImageResponse } from 'next/og';

export const alt = 'Lytra Learning';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default function TwitterImage() {
    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                    'linear-gradient(180deg, rgba(15,40,67,0.92), rgba(15,40,67,0.92)), radial-gradient(circle at 50% 10%, rgba(255,255,255,0.14), rgba(255,255,255,0) 55%)',
                color: '#ffffff',
                fontFamily: 'Arial',
                letterSpacing: '-0.02em',
            }}
        >
            <img
                src='https://lytra-learning.netlify.app/logo-hero.png'
                alt='Lytra Learning logo'
                width='220'
                height='220'
                style={{
                    borderRadius: '9999px',
                    objectFit: 'cover',
                }}
            />
            <div
                style={{
                    display: 'flex',
                    marginTop: 28,
                    fontSize: 72,
                    fontWeight: 700,
                }}
            >
                Lytra Learning
            </div>
            <div
                style={{
                    marginTop: 26,
                    fontSize: 40,
                    color: '#f2f5fa',
                }}
            >
                Education that restores. Careers that last.
            </div>
        </div>,
        {
            ...size,
        },
    );
}
