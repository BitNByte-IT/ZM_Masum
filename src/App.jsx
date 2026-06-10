import { profile, roles, services, stats, gallery } from "./data.js";

/* Graceful image fallback: if a photo isn't supplied yet, show a styled slot. */
function Img({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={(e) => {
        e.currentTarget.style.display = "none";
        e.currentTarget.nextElementSibling?.removeAttribute("hidden");
      }}
    />
  );
}

function Slot({ label }) {
  return (
    <div
      hidden
      className="absolute inset-0 grid place-items-center bg-panel2 text-mute text-xs tracking-wide"
    >
      <span className="border border-line rounded-md px-3 py-1.5">{label}</span>
    </div>
  );
}

export default function App() {
  const telHref = `tel:${profile.phone.replace(/[^+\d]/g, "")}`;
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Transport documentation enquiry"
  )}`;

  return (
    <div className="min-h-screen bg-ink selection:bg-azure/30">
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-ink/70 border-b border-line/70">
        <div className="mx-auto max-w-5xl px-5 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 font-display font-700 tracking-tight text-slate-100 hover:opacity-90 transition">
            <img
              src="/brand.svg"
              alt="ZM Masum logo"
              className="h-10 w-10"
            />
            <span className="text-lg leading-none">
              ZM <span className="text-gold">Masum</span>
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-7 text-sm text-mute">
            <a className="hover:text-slate-100 transition" href="#about">About</a>
            <a className="hover:text-slate-100 transition" href="#roles">Roles</a>
            <a className="hover:text-slate-100 transition" href="#services">Services</a>
            <a className="hover:text-slate-100 transition" href="#contact">Contact</a>
          </nav>
          <a
            href={telHref}
            className="text-sm font-600 rounded-full bg-gold text-ink px-4 py-1.5 shadow-gold hover:bg-goldSoft transition"
          >
            Call now
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-x-0 top-10 h-px road-lines opacity-60" />
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <p className="fade-up d1 text-sm uppercase tracking-[0.25em] text-azureSoft mb-4">
                {profile.tagline} · {profile.location}
              </p>
              <h1 className="fade-up d2 font-display font-800 text-4xl sm:text-5xl leading-[1.05] tracking-tight text-slate-50">
                {profile.headline.split(" ").slice(0, -3).join(" ")}{" "}
                <span className="grad-text">
                  {profile.headline.split(" ").slice(-3).join(" ")}
                </span>
              </h1>
              <p className="fade-up d3 mt-6 text-mute text-lg max-w-xl leading-relaxed">
                {profile.intro}
              </p>
              <div className="fade-up d4 mt-8 flex flex-wrap gap-3">
                <a
                  href={telHref}
                  className="rounded-full bg-azure px-6 py-3 font-600 text-white shadow-glow hover:bg-azureSoft transition"
                >
                  Call {profile.phoneDisplay}
                </a>
                <a
                  href={mailHref}
                  className="rounded-full border border-line px-6 py-3 font-600 text-slate-100 hover:border-gold hover:text-gold transition"
                >
                  Send an email
                </a>
              </div>
            </div>

            <div className="fade-up d3 relative aspect-square rounded-2xl overflow-hidden border border-line shadow-glow">
              <Img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
              <Slot label="Add portrait → images/portrait.jpg" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-4">
                <p className="font-display font-700 text-xl text-slate-50">{profile.name}</p>
                <p className="text-sm text-gold">CEO · Managing Director</p>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-line bg-panel/60 px-4 py-5 text-center"
              >
                <div className="font-display font-700 text-2xl sm:text-3xl text-slate-50">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-mute">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────────── */}
        <section id="about" className="py-16 border-t border-line/60">
          <div className="grid md:grid-cols-[0.7fr_1fr] gap-8">
            <h2 className="font-display font-700 text-2xl sm:text-3xl text-slate-50">
              The person behind the paperwork
            </h2>
            <p className="text-mute leading-relaxed text-lg">
              {profile.name} runs transport businesses and personally oversees the
              documentation that keeps every vehicle compliant — tax, token, fitness, and
              route permits. Owners hand over the paperwork and get back vehicles that are
              ready to earn, with nothing left to chance and no deadline missed.
            </p>
          </div>
        </section>

        {/* ── Roles ─────────────────────────────────────────────── */}
        <section id="roles" className="py-16 border-t border-line/60">
          <h2 className="font-display font-700 text-2xl sm:text-3xl text-slate-50 mb-8">
            Roles &amp; companies
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {roles.map((r) => (
              <article
                key={r.company}
                className="group rounded-2xl border border-line bg-panel/50 overflow-hidden hover:border-azure/60 transition"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Img
                    src={r.image}
                    alt={r.company}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <Slot label={`Add image → ${r.image}`} />
                  {r.current && (
                    <span className="absolute top-3 left-3 text-[11px] font-600 rounded-full bg-gold/90 text-ink px-2.5 py-1">
                      Current
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-700 text-lg text-slate-50">
                    {r.company}
                  </h3>
                  <p className="text-azureSoft text-sm font-600 mt-0.5">{r.position}</p>
                  <p className="text-mute text-sm mt-3 leading-relaxed">{r.note}</p>
                  <p className="text-xs text-mute/70 mt-3 uppercase tracking-wider">
                    {r.period}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────── */}
        <section id="services" className="py-16 border-t border-line/60">
          <h2 className="font-display font-700 text-2xl sm:text-3xl text-slate-50 mb-2">
            Documentation handled
          </h2>
          <p className="text-mute mb-8">Every paper a vehicle needs, managed in-house.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-xl border border-line bg-panel/50 p-5 hover:bg-panel2 transition"
              >
                <div className="font-display font-700 text-gold text-sm mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-600 text-slate-50">{s.title}</h3>
                <p className="text-mute text-sm mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery (optional) ────────────────────────────────── */}
        <section className="py-16 border-t border-line/60">
          <h2 className="font-display font-700 text-2xl sm:text-3xl text-slate-50 mb-8">
            On the road
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <figure
                key={g.src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-line"
              >
                <Img src={g.src} alt={g.caption} className="h-full w-full object-cover" />
                <Slot label={`Add → ${g.src}`} />
              </figure>
            ))}
          </div>
        </section>

        {/* ── Contact / CTA ─────────────────────────────────────── */}
        <section id="contact" className="py-20 border-t border-line/60">
          <div className="rounded-3xl border border-line bg-gradient-to-br from-panel2 to-panel p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 road-lines opacity-10" />
            <div className="relative">
              <h2 className="font-display font-800 text-3xl sm:text-4xl text-slate-50">
                Need your vehicle papers sorted?
              </h2>
              <p className="text-mute mt-4 max-w-lg mx-auto text-lg">
                Call or email {profile.name.split(" ").slice(-1)} directly — tax, token, and
                route permits handled without the hassle.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={telHref}
                  className="rounded-full bg-gold px-7 py-3.5 font-700 text-ink shadow-gold hover:bg-goldSoft transition"
                >
                  Call {profile.phoneDisplay}
                </a>
                <a
                  href={mailHref}
                  className="rounded-full bg-azure px-7 py-3.5 font-700 text-white shadow-glow hover:bg-azureSoft transition"
                >
                  Email {profile.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line/60">
        {/* ── Footer main ───────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl px-5 py-14 grid sm:grid-cols-3 gap-10 border-b border-line/40">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-4 hover:opacity-90 transition">
              <img src="/brand.svg" alt="ZM Masum" className="h-10 w-10" />
              <span className="font-display font-700 text-lg text-slate-100 leading-none">
                ZM <span className="text-gold">Masum</span>
              </span>
            </a>
            <p className="text-mute text-sm leading-relaxed mb-1">{profile.tagline}</p>
            <p className="text-mute/60 text-xs uppercase tracking-widest">{profile.location}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest text-mute/70 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5 text-sm">
              {["About", "Roles", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-mute hover:text-gold transition w-fit"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-700 uppercase tracking-widest text-mute/70 mb-4">
              Get in touch
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href={telHref} className="text-mute hover:text-gold transition">
                {profile.phoneDisplay}
              </a>
              <a href={mailHref} className="text-mute hover:text-gold transition break-all">
                {profile.email}
              </a>
              <p className="text-mute/50 text-xs mt-1 leading-relaxed">
                ZSM Transport Agency<br />Alishan Transport
              </p>
            </div>
          </div>
        </div>

        {/* ── Copyright bar ─────────────────────────────────────── */}
        <div className="mx-auto max-w-5xl px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-mute">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <a
            href="https://bitnbyteit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Powered by BitNByte IT
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}
