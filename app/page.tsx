import Link from 'next/link';

export default function Home() {
    return (
        <main className='ly-home-bg min-h-screen pb-8'>
            <div className='mx-auto w-full max-w-5xl overflow-hidden rounded-b-2xl border border-[#22344f] bg-[#0f2843] shadow-2xl'>
                <header className='flex items-center justify-between px-4 py-3 sm:px-6'>
                    <div className='flex items-center gap-2'>
                        <img
                            src='/logo.png'
                            alt='Lytra logo'
                            className='h-9 w-9 rounded-full bg-white/95 p-0.5'
                        />
                        <div className='leading-tight text-white'>
                            <p className='text-sm font-bold tracking-wide'>
                                LYTRA
                            </p>
                            <p className='text-[11px] uppercase text-[#f3b675]'>
                                Learning
                            </p>
                        </div>
                    </div>
                    <nav className='hidden items-center gap-6 text-sm text-white/90 sm:flex'>
                        <a
                            href='#about'
                            className='transition hover:text-[#ffb05d]'
                        >
                            About
                        </a>
                        <a
                            href='#programs'
                            className='transition hover:text-[#ffb05d]'
                        >
                            Programs
                        </a>
                        <a
                            href='#impact'
                            className='transition hover:text-[#ffb05d]'
                        >
                            Impact
                        </a>
                        <a
                            href='#contact'
                            className='transition hover:text-[#ffb05d]'
                        >
                            Contact
                        </a>
                    </nav>
                </header>

                <section className='ly-home-hero relative px-5 py-14 text-center sm:px-10'>
                    <div className='absolute inset-0 bg-[#1a2433]/35' />
                    <div className='relative z-10 mx-auto flex max-w-2xl flex-col items-center'>
                        <img
                            src='/logo.png'
                            alt='Lytra logo'
                            className='logo-fade-in h-28 w-28 rounded-full bg-white/90 p-2'
                        />
                        <h1 className='title-fade-in mt-7 text-4xl font-bold text-white sm:text-5xl'>
                            Lytra Learning
                        </h1>
                        <p className='subtitle-fade-in mt-5 max-w-xl text-base text-white/90 sm:text-xl'>
                            Education that restores. Careers that last.
                        </p>
                        <div className='mt-7 flex flex-wrap justify-center gap-3'>
                            <Link
                                href='/meaning'
                                className='rounded-md bg-[#f05c2b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c84b1a]'
                            >
                                What Lytra Means to Us
                            </Link>
                            <Link
                                href='/work'
                                className='rounded-md border border-white/45 bg-[#0f2843]/70 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d2a44]'
                            >
                                More About Our Work
                            </Link>
                        </div>
                    </div>
                </section>

                <section id='about' className='bg-[#f4f7fb] px-5 py-10 sm:px-8'>
                    <div className='grid gap-4 md:grid-cols-3'>
                        <article className='rounded-lg border border-[#d7deea] bg-white p-5'>
                            <h2 className='text-xl font-bold text-[#1d2a44]'>
                                Our Vision
                            </h2>
                            <p className='mt-2 text-sm leading-6 text-[#334155]'>
                                A future where incarceration is never the end of
                                someone&apos;s story.
                            </p>
                        </article>
                        <article className='rounded-lg border border-[#d7deea] bg-white p-5'>
                            <h2 className='text-xl font-bold text-[#1d2a44]'>
                                Our Mission
                            </h2>
                            <p className='mt-2 text-sm leading-6 text-[#334155]'>
                                We prepare learners for skilled trades, emerging
                                technologies, and lasting careers.
                            </p>
                        </article>
                        <article className='rounded-lg border border-[#d7deea] bg-white p-5'>
                            <h2 className='text-xl font-bold text-[#1d2a44]'>
                                Our Impact
                            </h2>
                            <p className='mt-2 text-sm leading-6 text-[#334155]'>
                                Led by justice-impacted leaders, built to
                                restore agency and economic dignity.
                            </p>
                        </article>
                    </div>
                </section>

                <section
                    id='programs'
                    className='grid gap-6 bg-white px-5 py-10 sm:px-8 md:grid-cols-3'
                >
                    <article className='rounded-lg border border-[#d5deea] p-5'>
                        <h3 className='text-lg font-semibold text-[#1d2a44]'>
                            Future-Ready Skills
                        </h3>
                        <p className='mt-2 text-sm text-[#334155]'>
                            Training pathways aligned to real labor-market
                            demand and credentials.
                        </p>
                    </article>
                    <article className='rounded-lg border border-[#d5deea] p-5'>
                        <h3 className='text-lg font-semibold text-[#1d2a44]'>
                            Peer-Led Charters
                        </h3>
                        <p className='mt-2 text-sm text-[#334155]'>
                            Community-built learning infrastructure led from
                            lived experience.
                        </p>
                    </article>
                    <article className='rounded-lg border border-[#d5deea] p-5'>
                        <h3 className='text-lg font-semibold text-[#1d2a44]'>
                            Career Transition
                        </h3>
                        <p className='mt-2 text-sm text-[#334155]'>
                            Practical preparation for interviews, licensing
                            pathways, and workforce entry.
                        </p>
                    </article>
                </section>

                <section
                    id='impact'
                    className='ly-home-cta px-5 py-16 text-center sm:px-8'
                >
                    <p className='text-3xl font-bold text-white sm:text-4xl'>
                        Education that restores. Careers that last.
                    </p>
                    <img
                        src='/logo.png'
                        alt='Lytra mark'
                        className='mx-auto mt-6 h-20 w-20 rounded-full bg-white/90 p-1.5'
                    />
                    <div className='mt-6'>
                        <a
                            href='mailto:site-managers@lytra-learning.org'
                            className='rounded-md bg-[#f05c2b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c84b1a]'
                        >
                            Contact Us
                        </a>
                    </div>
                </section>

                <footer
                    id='contact'
                    className='bg-[#0f2843] px-5 py-8 text-white sm:px-8'
                >
                    <div className='grid gap-7 md:grid-cols-3'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <img
                                    src='/logo.png'
                                    alt='Lytra logo'
                                    className='h-10 w-10 rounded-full bg-white/95 p-0.5'
                                />
                                <div>
                                    <p className='text-sm font-bold'>
                                        LYTRA LEARNING
                                    </p>
                                    <p className='text-xs text-white/70'>
                                        Led from the inside.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>Explore</p>
                            <div className='mt-2 flex flex-col gap-1 text-sm text-white/80'>
                                <Link href='/meaning'>What Lytra Means</Link>
                                <Link href='/work'>More About Our Work</Link>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>Contact</p>
                            <a
                                href='mailto:site-managers@lytra-learning.org'
                                className='mt-2 inline-block text-sm text-[#ffb05d]'
                            >
                                site-managers@lytra-learning.org
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
