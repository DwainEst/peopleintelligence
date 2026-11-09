import logoPath from "@/assets/logo.webp";
import { CALENDLY_URL, EMAIL } from "@/lib/contact";

// POPIA privacy notice. Keep "Last updated" current whenever this text changes.
const LAST_UPDATED = "9 November 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl font-medium text-[#0F3010] mb-3">{title}</h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-[#0F3010]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" aria-label="People Intelligence home">
            <img src={logoPath} alt="People Intelligence" width={555} height={192} className="h-12 w-auto" />
          </a>
          <a href="/" className="text-sm text-white uppercase tracking-wide hover:text-accent-gold">
            Back to home
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-light text-gray-900">Privacy notice</h1>
        <p className="mt-2 text-sm text-gray-500">{`Last updated: ${LAST_UPDATED}`}</p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          This notice explains how People Intelligence collects, uses and protects your personal information when you
          visit this website or contact us, in line with South Africa's Protection of Personal Information Act (POPIA).
        </p>

        <Section title="Who we are">
          <p>
            People Intelligence is a coaching and leadership development practice run by Danelle Esterhuizen in Cape
            Town, South Africa. People Intelligence is the responsible party for your personal information, and Danelle
            Esterhuizen is the Information Officer.
          </p>
          <p>
            Contact: <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
        </Section>

        <Section title="What we collect and why">
          <p>
            <strong>When you contact us</strong> by email, phone or WhatsApp, we receive your name, contact details and
            whatever you choose to tell us. We use this to reply to you, arrange a chemistry call and, if we work
            together, to deliver and administer coaching (including scheduling and invoicing).
          </p>
          <p>
            <strong>When you book a chemistry call</strong>, you do so on <a className="underline" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Calendly</a>, which
            collects your name, email address and any answers you give, and shares them with us so we can hold the call.
          </p>
          <p>
            <strong>When you visit this website</strong>, our hosting and security providers process technical
            information such as your IP address, browser type and the pages you request. This is used to deliver the
            site, keep it secure and protect it from abuse. We use privacy-friendly analytics that count visits without
            advertising cookies and without building a profile of you.
          </p>
          <p>
            Anything you share during coaching is kept strictly confidential and handled as set out in your coaching agreement.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            This website does not use advertising or tracking cookies. Our security provider may set a strictly
            necessary cookie to tell genuine visitors apart from automated bots. It does not identify you personally and
            does not require consent. Our analytics provider (Ahrefs) may also use aggregated, non-identifying statistics to improve its own services.
          </p>
        </Section>

        <Section title="Who we share it with">
          <p>We never sell your personal information. We share it only with service providers that help us operate:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cloudflare: website delivery, security and visit statistics</li>
            <li>Ahrefs: website visit statistics</li>
            <li>GoDaddy: website hosting</li>
            <li>Calendly: booking chemistry calls</li>
            <li>WhatsApp (Meta), if you choose to contact us that way</li>
            <li>Our email provider, for messages you send us</li>
          </ul>
          <p>
            Some of these providers store information outside South Africa, for example in the United States or Europe.
            We use providers that are bound by data protection terms offering protection comparable to POPIA.
          </p>
        </Section>

        <Section title="How long we keep it">
          <p>
            We keep personal information only for as long as we need it for the purposes above, or as long as the law
            requires (for example, financial records). After that it is deleted or anonymised.
          </p>
        </Section>

        <Section title="How we protect it">
          <p>
            We use reasonable technical and organisational measures to protect your information, including encrypted
            (HTTPS) connections, access controls and reputable service providers.
          </p>
        </Section>

        <Section title="Your rights">
          <p>Under POPIA you may:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>ask what personal information we hold about you and request a copy</li>
            <li>ask us to correct or delete it</li>
            <li>object to us processing it, or withdraw consent you have given</li>
            <li>
              lodge a complaint with the Information Regulator (South Africa) at <a className="underline" href="https://inforegulator.org.za/" target="_blank" rel="noopener noreferrer">
                inforegulator.org.za
              </a>
            </li>
          </ul>
          <p>
            To exercise any of these rights, email <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will
            respond within a reasonable time.
          </p>
        </Section>

        <Section title="Changes to this notice">
          <p>
            We may update this notice from time to time. The date at the top shows when it last changed.
          </p>
        </Section>
      </main>
    </div>
  );
}
