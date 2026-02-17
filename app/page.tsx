export default function Home() {
  return (
    <main className="hero-texture min-h-screen px-4 pb-20 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <section className="relative w-full overflow-hidden rounded-3xl border border-zinc-200/80 px-5 py-10 shadow-sm sm:px-8 sm:py-14 dark:border-zinc-700/70">
          <div className="hero-sunlight" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="logo-fade-in mb-6 rounded-2xl bg-white/95 p-3 shadow-lg">
              <img src="/logo.png" alt="Lytra logo" className="h-auto w-full max-w-[320px]" />
            </div>

            <h1 className="title-fade-in text-4xl font-semibold tracking-tight sm:text-6xl">
              Lytra Learning
            </h1>
            <p className="subtitle-fade-in mt-2 text-base text-zinc-700 dark:text-zinc-200">
              the payments that buy freedom.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
