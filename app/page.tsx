export default function Page() {
  const testimonials = [
    {
      name: "Mike R.",
      role: "Former Athlete, 33",
      quote:
        "I wanted to train hard again without feeling beat up all week. Nick gave me structure, accountability, and a plan that actually fit my life.",
    },
    {
      name: "Jordan T.",
      role: "High School Hockey Athlete",
      quote:
        "I got stronger, moved better, and felt more confident going into my season. Every session had a purpose.",
    },
    {
      name: "Chris L.",
      role: "Busy Professional, 38",
      quote:
        "The biggest difference was having clear direction. No wasted workouts, no guesswork, just progress.",
    },
  ];

  const faqs = [
    {
      q: "Who is coaching for?",
      a: "Coaching is built for high school athletes, former athletes, and adults who want structured training with clear progression and accountability.",
    },
    {
      q: "Do you offer in-person and online coaching?",
      a: "Yes. You can apply for in-person coaching, semi-private training, or online coaching depending on your goals and schedule.",
    },
    {
      q: "What makes your coaching different?",
      a: "Every program is built around performance, long-term development, and training with intent. The goal is to help you get stronger, move better, and stay consistent.",
    },
    {
      q: "How do I get started?",
      a: "Submit the apply form, share your goals, and I’ll follow up with the next steps to see if coaching is the right fit.",
    },
  ];

  const Nav = () => (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-lg font-semibold tracking-tight">Nick Johnson</p>
          <p className="text-sm text-zinc-600">Strength & Conditioning Coach</p>
        </div>
        <div className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#home" className="hover:text-zinc-500">Home</a>
          <a href="#coaching" className="hover:text-zinc-500">Coaching</a>
          <a href="#about" className="hover:text-zinc-500">About</a>
          <a href="#testimonials" className="hover:text-zinc-500">Testimonials</a>
          <a href="#faq" className="hover:text-zinc-500">FAQ</a>
          <a href="#contact" className="hover:text-zinc-500">Apply</a>
        </div>
      </div>
    </nav>
  );

  const SectionTitle = ({ eyebrow, title, text }) => (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-zinc-600 md:text-lg">{text}</p> : null}
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Nav />

      <section id="home" className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              NJ BARBELL | CSCS
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Structured Strength & Performance Coaching for Athletes and Adults Who Want to Train With Purpose
            </h1>
            <p className="mt-6 text-xl font-semibold text-zinc-800">
              You’re Not Unmotivated. You’re Just Missing a Plan.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
              High school and college athletes. Former athletes and driven adults 30–40. Built for people who still want structure, accountability, and real performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5">Apply for Coaching</a>
              <a href="#results" className="rounded-2xl border border-zinc-300 px-6 py-3 text-sm font-semibold transition hover:bg-zinc-50">View Results</a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-100 shadow-sm">
            <img
              src="/mnt/data/10FE53EE-32B6-4F29-BC22-3BE0E43AC0D0.jpeg"
              alt="Nick Johnson coaching on the football sideline"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="who-i-coach" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Who I Coach</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Two coaching paths. One standard: train with purpose.</h2>
          <p className="mt-4 text-lg leading-7 text-zinc-600">
            Whether you’re a driven adult who still wants to train like an athlete or a high school/college athlete chasing higher performance, the system is built around structure, intent, and long-term progress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-zinc-900 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">Adults</p>
            <h3 className="mt-3 text-2xl font-bold">Former Athletes & Driven Adults (30–40)</h3>
            <p className="mt-4 text-zinc-600">
              For adults who still take training seriously and want to stay strong, athletic, and durable without feeling beat up.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
              <li>• Strength + longevity</li>
              <li>• Structured progression</li>
              <li>• Smarter training with intent</li>
              <li>• Built around real-life demands</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white">Apply for Adult Coaching</a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-sm">
            <img
              src="/mnt/data/B7606E92-12A3-44D6-89F8-2A3F99023CF3.jpeg"
              alt="Championship football team with coach"
              className="h-64 w-full object-cover"
            />
            <div className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">Athletes</p>
              <h3 className="mt-3 text-2xl font-bold">High School & College Athletes</h3>
              <p className="mt-4 text-zinc-600">
                For athletes who need structured performance training to build strength, speed, resilience, and sport carryover.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                <li>• Speed and strength development</li>
                <li>• Movement quality + power</li>
                <li>• Injury reduction and durability</li>
                <li>• Position and sport transfer</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block rounded-2xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900">Apply for Athlete Coaching</a>
            </div>
          </div>
        </div>
      </section>

      <section id="coaching" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Coaching"
          title="Coaching built around performance, consistency, and long-term progress."
          text="Choose the path that fits your goals, schedule, and training needs."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold">1:1 Coaching</h3>
            <p className="mt-4 text-zinc-600">
              Personalized training with direct coaching, clear progression, and close accountability.
            </p>
            <p className="mt-4 font-semibold">$85 per session</p>
            <p className="mt-2 text-sm text-zinc-600">Commit to a plan. Earn a better rate.</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-900">8 sessions</p>
                <p className="mt-1 text-sm text-zinc-700">$600 <span className="text-zinc-500">($75/session)</span></p>
                <p className="mt-1 text-xs text-zinc-500">Save $10 per session</p>
              </div>
              <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900">12 sessions</p>
                  <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">Start Here</span>
                </div>
                <p className="mt-1 text-sm text-zinc-700">$840 <span className="text-zinc-500">($70/session)</span></p>
                <p className="mt-1 text-xs text-zinc-500">Most Popular • Save $15 per session</p>
                <button type="button" className="mt-4 w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">Start Here</button>
              </div>
              <div className="rounded-2xl border border-orange-300 bg-orange-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900">16 sessions</p>
                  <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">Best Results</span>
                </div>
                <p className="mt-1 text-sm text-zinc-700">$1,040 <span className="text-zinc-500">($65/session)</span></p>
                <p className="mt-1 text-xs text-zinc-500">Best for serious results • Save $20 per session</p>
                <button type="button" className="mt-4 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100">Commit to Results</button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Semi-Private Training</h3>
            <p className="mt-4 text-zinc-600">
              Small-group coaching with structure, energy, and individualized attention in a team setting.
            </p>
            <p className="mt-4 font-semibold">$65 per session, per athlete</p>
            <p className="mt-2 text-sm text-zinc-600">Train consistently. Pay less per session.</p>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-sm font-semibold text-zinc-900">8 sessions</p>
                <p className="mt-1 text-sm text-zinc-700">$480 <span className="text-zinc-500">($60/session)</span></p>
                <p className="mt-1 text-xs text-zinc-500">Save $5 per session</p>
              </div>
              <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50 p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900">12 sessions</p>
                  <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-semibold text-white">Start Here</span>
                </div>
                <p className="mt-1 text-sm text-zinc-700">$660 <span className="text-zinc-500">($55/session)</span></p>
                <p className="mt-1 text-xs text-zinc-500">Most Popular • Save $10 per session</p>
                <button type="button" className="mt-4 w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">Start Here</button>
              </div>
              <div className="rounded-2xl border border-orange-300 bg-orange-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-zinc-900">16 sessions</p>
                  <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">Best Results</span>
                </div>
                <p className="mt-1 text-sm text-zinc-700">$800 <span className="text-zinc-500">($50/session)</span></p>
                <p className="mt-1 text-xs text-zinc-500">Best for serious results • Save $15 per session</p>
                <button type="button" className="mt-4 w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100">Commit to Results</button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Online Coaching</h3>
            <p className="mt-4 text-zinc-600">
              Remote programming and support for clients who want structure, flexibility, and expert guidance.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              <li>• Customized training plan</li>
              <li>• Ongoing adjustments</li>
              <li>• Accountability and check-ins</li>
              <li>• Built for busy schedules</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionTitle
            eyebrow="About"
            title="Coaching rooted in discipline, development, and doing things the right way."
            text="I’m Nick Johnson, a PE/Health Teacher and Strength & Conditioning Coach. My approach is built on helping people become stronger, more resilient, and more confident through structured training that actually transfers to life and sport."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">Performance First</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Training should have a purpose. Every session is designed to move you closer to a specific outcome.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">Built for Real Life</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                The best plan is the one you can sustain. Coaching is structured to fit your actual demands, not an idealized schedule.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">No Guesswork</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                You get a clear system, measurable progress, and coaching that removes confusion so you can focus on execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Results</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proof built through structure, consistency, and standards.</h2>
            <p className="mt-4 text-lg leading-7 text-zinc-600">
              The goal is never random hard work. It’s measurable progress that transfers to sport, life, and long-term performance.
            </p>
          </div>

          <div className="mb-10 rounded-3xl border-2 border-zinc-900 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">Elite athlete outcomes</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-4xl font-black">2024</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Trained the Connecticut Walter Camp Player of the Year and won the state championship.</p>
              </div>
              <div>
                <p className="text-4xl font-black">2022</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Trained the Connecticut MaxPreps Player of the Year and won the state championship.</p>
              </div>
              <div>
                <p className="text-4xl font-black">3X</p>
                <p className="mt-2 text-sm leading-6 text-zinc-600">Consecutive NVL Weightlifting competition champions built through systemized team development.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
                <img
                  src="/mnt/data/E9DE6958-FF4A-4F84-BDC5-7BCE142760C7.jpeg"
                  alt="2024 state championship football team"
                  className="h-72 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
                <img
                  src="/mnt/data/B7606E92-12A3-44D6-89F8-2A3F99023CF3.jpeg"
                  alt="2022 state championship football team"
                  className="h-72 w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-black">100+</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Athletes coached across football, hockey, and multi-sport performance environments.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-black">CIAC</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Championship culture built through discipline, preparation, and performance standards.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-black">30–40</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Adults rebuilding strength, durability, and athleticism without feeling beat up.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-4xl font-black">System</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">Rep schemes, percentages, progression phases, and coaching accountability.</p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold">What clients and athletes experience</h3>
            <ul className="mt-6 grid gap-3 text-sm text-zinc-700 md:grid-cols-2">
              <li>• Increased strength and bar speed</li>
              <li>• Better movement quality and recovery</li>
              <li>• More confidence in the weight room</li>
              <li>• Less pain from random programming</li>
              <li>• Higher buy-in and team culture</li>
              <li>• Clear progression instead of guessing</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
        <SectionTitle
          eyebrow="Testimonials"
          title="What clients say"
          text="Real feedback from athletes and adults who wanted better structure, better coaching, and better results."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
              <p className="text-base leading-7 text-zinc-700">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-zinc-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions"
            text="Everything you need to know before applying."
          />

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Apply</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Apply for Coaching</h2>
          <p className="mt-4 text-lg leading-7 text-zinc-600">
            This is for adults who take training seriously and want structure, accountability, and real progress.
            If that’s you, complete the form below.
          </p>
          <p className="mt-3 text-sm text-zinc-500">Serious inquiries only. Expect a follow-up within 24–48 hours.</p>
        </div>

        <form className="rounded-3xl border border-zinc-200 p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Age</label>
              <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="e.g. 34" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Location</label>
              <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="City / State" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">What type of coaching are you interested in?</label>
              <select className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900">
                <option>1:1 Coaching</option>
                <option>Semi-Private Training</option>
                <option>Online Coaching</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">What are your main goals right now?</label>
              <textarea rows={4} className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="Strength, performance, fat loss, injury reduction, etc." />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">What’s currently holding you back?</label>
              <textarea rows={4} className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="Be specific — lack of structure, injuries, inconsistency, etc." />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">What does your current training look like?</label>
              <textarea rows={4} className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="Days per week, type of workouts, etc." />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">Are you dealing with any injuries or limitations?</label>
              <textarea rows={3} className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" placeholder="Optional" />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">How committed are you to following a structured plan?</label>
              <select className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900">
                <option>Very committed — ready to follow a plan</option>
                <option>Committed but need guidance</option>
                <option>Just exploring options</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium">Anything else I should know?</label>
              <textarea rows={3} className="w-full rounded-2xl border border-zinc-300 px-4 py-3 focus:border-zinc-900" />
            </div>

            <div className="md:col-span-2">
              <button type="button" className="w-full rounded-2xl bg-zinc-900 px-6 py-4 text-base font-semibold text-white hover:-translate-y-0.5">
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
