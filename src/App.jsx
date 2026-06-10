import { useState, useEffect } from "react";
import { profile, roles, services, stats, gallery } from "./data.js";

const BASE = import.meta.env.BASE_URL;
const asset = (path) => `${BASE}${path.replace(/^\//, "")}`;

/* Renders the image or a placeholder slot — uses React state so it resets correctly when src changes. */
function MediaSlot({ src, alt, imgClassName, label }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => { setFailed(false); }, [src]);

  const resolvedSrc = src.startsWith("http") ? src : asset(src);

  if (failed) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-panel2 text-mute text-xs tracking-wide">
        <span className="border border-line rounded-md px-3 py-1.5">{label}</span>
      </div>
    );
  }
  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="lazy"
      className={imgClassName}
      onError={() => setFailed(true)}
    />
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
              src={asset("brand.svg")}
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
              <MediaSlot
                src={profile.photo}
                alt={profile.name}
                imgClassName="h-full w-full object-cover"
                label="Add portrait → images/portrait.jpg"
              />
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
           The Mind Behind Seamless Compliance
            </h2>
            <p className="text-mute leading-relaxed text-lg">
           {profile.name} is a transport industry consultant and entrepreneur, recognized for delivering trusted compliance and documents solutions to vehicle owners, fleet operators, and transport businesses. Through an established network of experienced professionals, he provides end-to-end advisory and execution services covering vehicle tax, token, fitness certification, registration, ownership transfer, and route permits - ensuring every vehicle remains fully compliant while clients stay focused on their business.
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
                  <MediaSlot
                    src={r.image}
                    alt={r.company}
                    imgClassName="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                    label={`Add image → ${r.image}`}
                  />
         
                </div>
                <div className="p-5">
                  <h3 className="font-display font-700 text-lg text-slate-50">
                    {r.company}
                  </h3>
                  <p className="text-azureSoft text-sm font-600 mt-0.5">{r.position}</p>
                  <p className="text-mute text-sm mt-3 leading-relaxed">{r.note}</p>
                  {/* <p className="text-xs text-mute/70 mt-3 uppercase tracking-wider">
                    {r.period}
                  </p> */}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────────── */}
        <section id="services" className="py-16 border-t border-line/60">
          <h2 className="font-display font-700 text-2xl sm:text-3xl text-slate-50 mb-2">
            Regulatory Compliance Expertise
          </h2>
          <p className="text-mute mb-8">Comprehensive advisory and execution services covering vehicle documentation and regulatory compliance for transport businesses and vehicle owners.</p>
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
                <MediaSlot
                  src={g.src}
                  alt={g.caption}
                  imgClassName="h-full w-full object-cover"
                  label={`Add → ${g.src}`}
                />
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
                Let's Build Better Transport Solutions
              </h2>
              <p className="text-mute mt-4 max-w-lg mx-auto text-lg">
           Connect with {profile.name} for transport consultancy, commercial logistics partnerships, regulatory compliance, and professional documentation services backed by years of industry experience and a trusted execution network.
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
              <img src={asset("brand.svg")} alt="ZM Masum" className="h-10 w-10" />
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
              Quick Links
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
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${profile.whatsapp.replace(/[^+\d]/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-mute hover:text-[#25d366] transition group"
              >
                <svg className="h-4 w-4 shrink-0 text-[#25d366]/60 group-hover:text-[#25d366] transition" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.853L.057 23.59a.75.75 0 00.916.917l5.735-1.474A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.355l-.355-.21-3.685.947.977-3.575-.23-.368A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                {profile.whatsappDisplay}
              </a>
              {/* Phone */}
              <a href={telHref} className="flex items-center gap-2.5 text-mute hover:text-gold transition group">
                <svg className="h-4 w-4 shrink-0 text-gold/60 group-hover:text-gold transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                </svg>
                {profile.phoneDisplay}
              </a>
              <a href={mailHref} className="flex items-center gap-2.5 text-mute hover:text-gold transition group break-all">
                <svg className="h-4 w-4 shrink-0 text-gold/60 group-hover:text-gold transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {profile.email}
              </a>
              <a href={profile.zsmWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-mute hover:text-gold transition group">
                <svg className="h-4 w-4 shrink-0 text-gold/60 group-hover:text-gold transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                ZSM Transport Agency ↗
              </a>
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
