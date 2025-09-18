import Link from "next/link";
import { AlertTriangle, FileSignature, MailPlus, ShieldCheck, Users } from "lucide-react";
import { MailingListForm } from "@/components/mailing-list-form";
import { EmailTreoCta } from "@/components/email-treo-cta";
import { AddToCalendarButton } from "@/components/add-to-calendar-button";

const navigation = [
  { href: "#issue", label: "The Issue" },
  { href: "#legal", label: "Legal Ground" },
  { href: "#timeline", label: "Timeline" },
  { href: "#action", label: "Action Plan" },
  { href: "#faq", label: "FAQ" },
];

const stats = [
  {
    label: "Deck owner charge if UFSA passes",
    value: "$23,300",
    detail: "+ $5,700 over the uniform assessment.",
  },
  {
    label: "Per-home charge if Amendment 3 fails",
    value: "$17,600",
    detail: "Uniform cost using current CC&Rs.",
  },
  {
    label: "Votes needed to approve amendments",
    value: "96",
    detail: "60% of the 159 homes; deck owners can block it.",
  },
];

const timeline = [
  {
    date: "2015",
    title: "Deck maintenance becomes an HOA duty",
    detail: "CC&Rs amended to place deck repair/replacement squarely on the Association.",
  },
  {
    date: "Fall 2024",
    title: "Engineers document structural deck failures",
    detail: "HOA acknowledges responsibility while investigating scope and bids.",
  },
  {
    date: "Sept 5, 2025",
    title: "HOA counsel confirms history",
    detail: "Letter cites the 2015 amendment and reiterates deck responsibility is with the HOA.",
  },
  {
    date: "Sept 15, 2025",
    title: "Board pushes Amendment 3 + UFSA",
    detail: "Announces $23.3k deck-owner charge vs. $8.8k for non-deck owners if amendment passes.",
  },
  {
    date: "Oct 9, 2025",
    title: "Amendment ballots currently due",
    detail: "Board reserved the right to extend the window; demand the process meets state law.",
  },
  {
    date: "Oct 16, 2025",
    title: "Special assessment vote set",
    detail: "Board plans to mirror Amendment 3 outcome. Show up, object, and vote for fairness.",
  },
];

const legalReferences = [
  {
    title: "Anti-retroactivity rule",
    citation: "Utah Code § 68-3-3",
    summary:
      "Laws aren’t retroactive unless the Legislature says so. An HOA can’t rewrite the past once an obligation has accrued.",
    link: "https://le.utah.gov/xcode/Title68/Chapter3/68-3-S3.html",
  },
  {
    title: "Supreme Court on vested rights",
    citation: "Holliday Water (2010 UT 45); Mitchell v. Roberts (2020 UT 34)",
    summary:
      "Utah courts refuse to let new rules destroy vested contractual rights. Deck repair duty vested when the defect was documented.",
    link: "https://casetext.com/case/salt-lake-county-v-holliday-water-company",
  },
  {
    title: "Declaration controls maintenance",
    citation: "Utah Code § 57-8a-224(2)",
    summary:
      "In planned communities, the declaration decides who maintains what. Our CC&Rs keep decks under HOA care.",
    link: "https://le.utah.gov/xcode/Title57/Chapter8A/57-8a-S224.html",
  },
  {
    title: "Assessment method can’t change by rule",
    citation: "Utah Code § 57-8a-218(8)(c)",
    summary:
      "Boards can’t alter assessment formulas through rules—only through owner-approved declaration amendments.",
    link: "https://le.utah.gov/xcode/Title57/Chapter8A/57-8a-S218.html",
  },
  {
    title: "Written ballot requirements",
    citation: "Utah Code § 16-6a-709(4)",
    summary:
      "Ballots must state approval and quorum numbers, deadlines, and include all info required for an informed vote.",
    link: "https://le.utah.gov/xcode/Title16/Chapter6A/16-6a-S709.html",
  },
  {
    title: "Meeting notice must be fair",
    citation: "Utah Code § 16-6a-704",
    summary:
      "The Oct 16 vote requires fair, reasonable notice. Ask for documentation before they count votes.",
    link: "https://le.utah.gov/xcode/Title16/Chapter6A/16-6a-S704.html",
  },
];

const actionItems = [
  {
    title: "Vote NO on Amendment 3",
    detail:
      "Reject any change unless it explicitly protects already-identified deck repairs from the UFSA cost split.",
  },
  {
    title: "Demand prospective-only language",
    detail:
      "Email the Board and counsel: UFSA must apply only to future projects. The deck work belongs under the current CC&Rs.",
  },
  {
    title: "Show up on October 16",
    detail:
      "Object on the record, insist on a fair vote, and call for a resolution keeping the deck project uniform.",
  },
  {
    title: "Request HOA records",
    detail:
      "Use Utah Code § 16-6a-1602 to inspect engineering reports, legal opinions, minutes, and vote tallies.",
  },
  {
    title: "Coordinate deck owners",
    detail:
      "Organize a voting bloc. Deck owners alone can stop Amendment 3 and any follow-on UFSA assessment.",
  },
];

const faqs = [
  {
    question: "Can the HOA ever shift deck costs to owners?",
    answer:
      "Yes—prospectively. Owners can approve a declaration amendment that changes future maintenance or assessments. It cannot erase costs for defects already documented under the prior rules.",
  },
  {
    question: "What if the board pushes ahead anyway?",
    answer:
      "Collect evidence and seek a declaratory judgment plus injunction. Utah courts will enforce the CC&Rs as written when the defect was found.",
  },
  {
    question: "Does emailing or voting actually work?",
    answer:
      "Absolutely. 96 votes are required. Deck owners can defeat the amendment—and organized documentation sets the stage for legal relief if needed.",
  },
  {
    question: "How will email signups be used?",
    answer:
      "We’ll coordinate legal strategy, share records, and mobilize turnout. Addresses stay private inside the coalition.",
  },
];

const documents = [
  {
    label: "Board letter (Sept 15, 2025)",
    href: "/docs/board-letter-ccr-amendments.pdf",
    description: "Presents the $23.3k vs $8.8k proposal and schedules the Oct 16 assessment vote.",
  },
  {
    label: "Attorney memo (Sept 5, 2025)",
    href: "/docs/attorney-summary-letter.pdf",
    description: "Summarizes the draft amendments and reaffirms that decks sit with the Association.",
  },
  {
    label: "Ballot for voting",
    href: "/docs/ballot-for-voting.pdf",
    description: "Check whether quorum information and deadlines satisfy Utah Code § 16-6a-709(4).",
  },
  {
    label: "Proposed Second Amendment",
    href: "/docs/proposed-second-amendment.pdf",
    description: "Maintains HOA responsibility for decks and limited common elements.",
  },
  {
    label: "Proposed Third Amendment",
    href: "/docs/proposed-third-amendment.pdf",
    description: "Introduces the UFSA cost split without a grandfather clause for existing defects.",
  },
];

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-24 pt-24 sm:px-8">
      <div className="fixed inset-x-0 top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8">
          <Link href="#hero" className="text-base font-semibold tracking-tight text-sky-700">
            Deck Defense
          </Link>
          <div className="hidden items-center gap-6 text-sm text-slate-600 sm:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1 font-medium transition hover:bg-sky-50 hover:text-sky-700"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#join"
            className="hidden items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 hover:text-white sm:flex"
          >
            <MailPlus size={16} />
            Join the list
          </a>
        </nav>
      </div>

      <header
        id="hero"
        className="mt-4 grid gap-10 sm:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] sm:items-center"
      >
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
            Protect our decks
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Stop the HOA from rewriting history on deck repairs.
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            Independence Avenue homeowners already reported defective decks while the CC&Rs required the HOA to cover repairs. Amendment 3 tries to rewrite that duty and charge deck owners an extra $5,700 each. Utah law says no—when a defect is identified, the duty and cost allocation vest.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#join"
                className="flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 hover:text-white"
              >
                <Users size={18} />
                Build the coalition
              </a>
              <a
                href="#legal"
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-sky-700 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <FileSignature size={18} />
                Know your rights
              </a>
            </div>
            <AddToCalendarButton />
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <AlertTriangle className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-rose-500">Risk</p>
                <h2 className="text-2xl font-semibold text-slate-900">Retroactive cost shift</h2>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Amendment 3 introduces a new cost formula without grandfathering the known deck project. The Board intends to make deck owners shoulder 50% of the project alone.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-16">
        <section id="issue" className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Why the UFSA push is a problem</h2>
          <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-md md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-sky-700">The legal reality</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Once the HOA acknowledged the decks were failing—while the CC&Rs placed maintenance on the Association—the duty vested. Utah’s anti-retroactivity rule prevents the HOA from changing cost allocation for that already-identified repair. They can plan differently for future projects, but they can’t rewrite the past to bill deck owners extra.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-sky-700">If we do nothing</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  Deck owners overpay by $5,700 each compared to the uniform assessment—roughly $550,000 in aggregate.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  Sets precedent to shift other “unique features” (patios, fences, carports) onto individual owners later.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  Owners lose leverage to demand timely repairs if the HOA escapes liability on known defects.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="legal" className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">The Utah law that protects us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {legalReferences.map((ref) => (
              <article
                key={ref.citation}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">{ref.title}</h3>
                <p className="mt-1 text-sm font-medium text-sky-700">{ref.citation}</p>
                <p className="mt-3 text-sm text-slate-600">{ref.summary}</p>
                <Link
                  href={ref.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-600"
                >
                  Read the statute
                  <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="timeline" className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">How we got here</h2>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div
                key={`${item.date}-${index}`}
                className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md sm:flex-row sm:items-start"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                  <span className="text-sm font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-700">{item.date}</p>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="action" className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-semibold text-slate-900">What every owner can do this week</h2>
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-sm transition hover:bg-sky-500 hover:text-white"
            >
              Rally the list
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {actionItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Key documents to review</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {documents.map((doc) => (
              <Link
                key={doc.label}
                href={doc.href}
                target="_blank"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">{doc.label}</h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                    Open PDF
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{doc.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section id="join" className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-md">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Stay mobilized together</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                The HOA counts on silence. A coordinated list gives us fast updates, legal strategy, and turnout power. Join so you don’t miss critical deadlines.
              </p>
            </div>
            <div className="hidden sm:block">
              <ShieldCheck className="h-16 w-16 text-sky-600" />
            </div>
          </div>
          <MailingListForm />
        </section>

        <section id="faq" className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Frequently asked questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact-treo" className="space-y-6">
          <h2 className="text-3xl font-semibold text-slate-900">Let Treo hear from you</h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Keep professional pressure on management. Personal emails from homeowners reinforce that the deck
            repairs must stay under the CC&Rs that were in place when the defects were documented.
          </p>
          <EmailTreoCta />
        </section>
      </main>

      <footer className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 text-sm text-slate-600 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-slate-900">Deck Defense Alliance</p>
            <p className="text-sm text-slate-600">Independence Avenue homeowners · Provo, Utah</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:deckdefensecoalition@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-sky-700 transition hover:border-sky-400 hover:bg-sky-50"
            >
              <MailPlus size={16} />
              deckdefensecoalition@gmail.com
            </a>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-600"
            >
              Back to top →
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          Disclaimer: This site provides community coordination and cites public Utah statutes and cases. It is not individualized legal advice. Consult Utah counsel for litigation strategy.
        </p>
      </footer>
    </div>
  );
}
