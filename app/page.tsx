import Link from "next/link";

export default function Home() {
  return (
    <main className="hero-texture min-h-screen px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <section className="brand-card relative w-full overflow-hidden rounded-3xl px-5 py-10 sm:px-8 sm:py-14">
          <div className="hero-sunlight" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="logo-fade-in mb-6 rounded-2xl bg-white/95 p-3 shadow-lg">
              <img src="/logo.png" alt="Lytra logo" className="h-auto w-full max-w-[320px]" />
            </div>

            <h1 className="title-fade-in brand-heading text-5xl font-extrabold tracking-tight sm:text-7xl">
              Lytra Learning
            </h1>
            <p className="subtitle-fade-in mt-4 max-w-2xl text-base sm:text-lg">
              Lytra — (laɪ.trə or LIE-truh) comes from the Greek word for redemption — the act
              of restoring someone to full standing. It reflects our belief that education is not
              a privilege to be earned back, but a right that restores what incarceration too
              often takes: agency, identity, and economic dignity.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/meaning"
                className="brand-btn-primary rounded-md px-5 py-3 text-sm font-semibold transition"
              >
                What Lytra Means to Us
              </Link>
              <Link
                href="/work"
                className="brand-btn-secondary rounded-md px-5 py-3 text-sm font-semibold transition"
              >
                More About Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
