import Link from 'next/link';

export default function MeaningPage() {
    return (
        <main className='hero-texture min-h-screen px-4 py-8 sm:px-6 lg:px-8'>
            <article className='brand-card brand-prose mx-auto w-full max-w-4xl rounded-3xl px-6 py-8 sm:px-10 sm:py-12'>
                <h1 className='brand-heading mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
                    The Weight of a Life
                </h1>

                <div className='brand-section mt-8 space-y-6 text-base leading-8 sm:text-lg'>
                    <p>
                        Three thousand years ago, Homer wrote the Iliad — a war
                        epic that was really a poem about worth. What does a
                        life cost? What does a death demand? Who gets to decide?
                        At its climax, a grieving father crosses enemy lines in
                        the middle of the night to kneel before the man who
                        killed his son and ask for the body back. The word for
                        what he offers — and what makes the return possible — is
                        lytra. Ransom. The price of restoration.
                    </p>
                    <p>
                        Aeschylus, writing a generation later, took that scene
                        and made it literal. In his retelling, Hector&apos;s
                        body is placed on a scale. Gold is added to the other
                        side until the weights balance. The transaction cannot
                        be completed until the scale says the offering matches
                        the worth of what was lost.
                    </p>
                    <p>
                        This is a radical act. It refuses abstraction. It says:
                        we will not guess at this person&apos;s value. We will
                        not assign it by rank, by reputation, or by the word of
                        the powerful. We will weigh it. We will let the measure
                        speak.
                    </p>
                    <p>
                        The justice system does its own weighing — but it
                        measures only the offense. The sentence is calibrated to
                        the crime, not the person. What gets left off the scale
                        entirely is everything else: the circumstances that
                        shaped the moment, the capacities that exist beneath the
                        record, the potential that survives incarceration
                        intact. The system weighs one thing and calls it the
                        whole.
                    </p>
                    <p>Lytra Learning puts everything back on the scale.</p>
                    <p>
                        Our educational model is holistic by design because a
                        person is not a single variable. Technical skill matters
                        — and we build it rigorously, across skilled trades,
                        emerging technologies, and the digital economy. But
                        technical skill alone is an incomplete measure. The
                        person who can wire a solar panel also needs to know how
                        to walk into a job interview carrying a record, how to
                        navigate a licensing board that has never considered
                        someone like them, how to lead a team, manage conflict,
                        communicate across difference, and build a career that
                        holds.
                    </p>
                    <p>
                        So we weigh all of it. Occupational knowledge.
                        Professional identity. Civic standing. Emotional
                        intelligence. The ability to teach others what
                        you&apos;ve learned — because in our Charter model, the
                        most advanced form of mastery is turning around and
                        pulling the next person forward.
                    </p>
                    <p>
                        When a Lytra learner completes our program, the scale is
                        full. Not because we decided it was, but because we
                        built the curriculum to account for the whole weight of
                        a human life preparing to re-enter the world. Credential
                        and character. Skill and story. Technical competency and
                        the dignity to walk through a door knowing you belong on
                        the other side.
                    </p>
                    <p>
                        The ancients understood something we&apos;ve forgotten:
                        that restoration requires precision. You don&apos;t
                        ransom a life with a guess. You measure until the scale
                        balances.
                    </p>
                    <p>
                        That&apos;s what we&apos;re doing. One learner at a
                        time.
                    </p>
                </div>

                <div className='mt-10 flex flex-wrap gap-3'>
                    <a
                        href='mailto:site-managers@lytra-learning.org'
                        className='brand-btn-primary rounded-md px-5 py-3 text-sm font-semibold transition'
                    >
                        Contact Us
                    </a>
                    <Link
                        href='/work'
                        className='brand-btn-secondary rounded-md px-5 py-3 text-sm font-semibold transition'
                    >
                        More About Our Work
                    </Link>
                    <Link
                        href='/'
                        className='brand-btn-secondary rounded-md px-5 py-3 text-sm font-semibold transition'
                    >
                        Back Home
                    </Link>
                </div>
            </article>
        </main>
    );
}
