import Link from "next/link";

export default function WorkPage() {
  return (
    <main className="hero-texture min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <article className="brand-card brand-prose mx-auto w-full max-w-4xl rounded-3xl px-6 py-8 sm:px-10 sm:py-12">
        <h1 className="brand-heading mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          More About Our Work
        </h1>

        <section className="mt-10">
          <h2 className="brand-heading text-2xl font-bold sm:text-3xl">Vision</h2>
          <p className="mt-3 text-base leading-8 sm:text-lg">
            A future where incarceration is never the end of someone&apos;s story — where every person
            emerging from the justice system steps into the workforce ready, credentialed, and
            confident, led by those who have walked the same road.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="brand-heading text-2xl font-bold sm:text-3xl">Mission</h2>
          <p className="mt-3 text-base leading-8 sm:text-lg">
            Lytra Learning prepares incarcerated individuals for the future of work through lived
            experience and occupational wisdom education — supported from the outside, delivered on
            the inside, led from the inside. Powered by a 100% justice-impacted leadership team and
            a nationwide network of peer-driven Lytra Charters, we meet learners where they are and
            equip them for where the economy is going: skilled trades, emerging technologies, and
            careers that exist today and the ones being built tomorrow.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="brand-heading text-2xl font-bold sm:text-3xl">Core Commitments</h2>
          <div className="mt-4 space-y-6 text-base leading-8 sm:text-lg">
            <p>
              <strong>Prepare for the future of work.</strong> Our curriculum is built around where
              the labor market is heading — renewable energy, advanced manufacturing, skilled
              trades, and the digital economy — not where it&apos;s been. Every course connects
              classroom learning to credentialed, living-wage careers.
            </p>
            <p>
              <strong>Lead from lived experience.</strong> Lytra Learning is governed, operated, and
              driven by people who have been directly impacted by the justice system. This isn&apos;t a
              diversity commitment. It&apos;s our operating principle. Proximity to the problem is our
              greatest strategic asset.
            </p>
            <p>
              <strong>Scale through community.</strong> Lytra Charters are peer-led learning
              communities built by the incarcerated community, for the incarcerated community. Each
              Charter team holds real ownership and autonomy over program design, operations, and
              management — including navigating the work of securing approval from correctional
              staff. We don&apos;t just deliver education to incarcerated people. We build educational
              infrastructure with them. Our Charter network isn&apos;t an add-on to a traditional model.
              It&apos;s a new kind of learning for a new kind of educational ecosystem.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="brand-heading text-2xl font-bold sm:text-3xl">Tagline</h2>
          <p className="mt-4 text-base font-semibold sm:text-lg">
            Education that restores. Careers that last.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:site-managers@lytra-learning.org"
            className="brand-btn-primary rounded-md px-5 py-3 text-sm font-semibold transition"
          >
            Contact Us
          </a>
          <Link
            href="/meaning"
            className="brand-btn-secondary rounded-md px-5 py-3 text-sm font-semibold transition"
          >
            What Lytra Means to Us
          </Link>
          <Link
            href="/"
            className="brand-btn-secondary rounded-md px-5 py-3 text-sm font-semibold transition"
          >
            Back Home
          </Link>
        </div>
      </article>
    </main>
  );
}
