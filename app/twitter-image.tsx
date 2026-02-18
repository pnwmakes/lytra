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
                    'radial-gradient(circle at 50% 0%, #fff0b4 0%, #fff0b400 38%), linear-gradient(180deg, #e8edf3 0%, #d9e2ec 100%)',
                color: '#111827',
                fontFamily: 'Arial',
                letterSpacing: '-0.02em',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    padding: '24px 36px',
                    borderRadius: 20,
                    background: 'rgba(255,255,255,0.94)',
                    border: '1px solid rgba(17,24,39,0.12)',
                    boxShadow: '0 12px 30px rgba(17,24,39,0.1)',
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
                    color: '#374151',
                }}
            >
                the payments that buy freedom.
            </div>
        </div>,
        {
            ...size,
        },
    );
}
