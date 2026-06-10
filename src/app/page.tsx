import React from "react";
import Link from "next/link";
import ContactForm from "./components/ContactForm";
import {
  Phone,
  Mail,
  ChevronRight,
  Scale,
  ShieldCheck,
  Gavel,
  FileText,
  Menu,
  MapPin,
  BookOpen,
  Building2,
} from "lucide-react";

export default function LawFirmPage() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B]">
      <Header />
      <Hero />
      <About />
      <WhyChoose />
      <SuccessStories />
      <ConsultationForm />
      <MapSection />
      <Footer />
    </div>
  );
}

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200"
      style={{
        background: "#003366",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "0 4px 28px 0 rgba(0,51,102,0.18)",
      }}
    >
      <div className="w-full px-8 md:px-16">
        {/* Main Nav only - top bar removed */}
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-6">
            <div className="h-14 w-14 rounded-full border-2 border-white bg-white flex items-center justify-center shadow-sm">
              <img
                src="/goel-logo.svg"
                alt="Goel & Associates logo"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="site-brand-text font-normal text-xl tracking-widest uppercase text-white whitespace-nowrap">
                Goel &amp; Associates
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-xs font-normal uppercase tracking-widest">
            <Link href="/" className="text-white transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-white/70 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-white/70 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-white/70 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#061423]"
      style={{ minHeight: "100vh" }}
    >
      <img
        src="/BGNEW.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061423]/92 via-[#061423]/74 to-[#061423]/34" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061423]/76 via-transparent to-[#061423]/20" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8 pt-40 pb-24">
        <div className="max-w-3xl">
          <span className="text-[#d7b46a] font-black uppercase tracking-[0.32em] text-[11px] mb-6 block">
            Tax Litigation - Advisory - Compliance
          </span>
          <h1
            className="font-crimson-text text-white leading-[1.05] mb-8"
            style={{ fontSize: "clamp(2.4rem, 4.3vw, 4.35rem)" }}
          >
            About Goel &amp; Associates
          </h1>
          <p className="text-white/82 text-base mb-9 tracking-wide font-light max-w-3xl leading-relaxed">
            Goel &amp; Associates is a Dehradun-based legal and taxation practice
            focused on direct tax advisory, GST compliance, litigation support,
            tribunal representation, and strategic counsel for businesses,
            trusts, entrepreneurs, and individuals.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mb-10">
            {[
              { label: "Direct Tax", value: "Advisory" },
              { label: "ITAT & Appeals", value: "Representation" },
              { label: "GST & Audit", value: "Compliance & Litigation" },
            ].map((item) => (
              <div key={item.label} className="border-l-4 border-[#d7b46a] bg-white/10 px-5 py-4 shadow-lg shadow-black/10 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/48 font-black mb-1">
                  {item.label}
                </p>
                <p className="text-white text-sm font-black uppercase tracking-wider">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="self-start bg-white hover:bg-[#f4ead4] text-[#003366] px-8 py-4 flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] transition-all shadow-xl shadow-black/20">
              Schedule Consultation <ChevronRight size={16} />
            </a>
            <a href="/services" className="self-start border border-white/55 hover:bg-white text-white hover:text-[#003366] px-8 py-4 flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] transition-all">
              Learn About Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 bg-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 h-2/3 opacity-[0.06] pointer-events-none">
        <img src="/court-hero.svg" alt="" className="h-full w-full object-cover object-left-bottom" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-[330px_1fr] gap-16 items-start">
          <div className="w-full max-w-[330px] mx-auto md:mx-0 space-y-8">
            <div className="shadow-lg">
              <div className="bg-slate-100 aspect-[4/4.1] overflow-hidden">
                <img
                  src="/photom.png"
                  className="h-full w-full object-cover object-top"
                  alt="Advocate Pankaj Goel"
                />
              </div>
              <div className="bg-[#003366] text-white px-5 py-4">
                <p className="text-2xl font-light tracking-wide leading-none">
                  Pankaj Goel
                </p>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/80 mt-2">
                  Advocate & Taxation Counsel
                </p>
              </div>
            </div>

            <div className="shadow-lg">
              <div className="bg-slate-100 aspect-[4/4.1] overflow-hidden">
                <img
                  src="/photon.jpg"
                  className="h-full w-full object-cover object-top"
                  alt="N. K Goel, IRS"
                />
              </div>
              <div className="bg-[#003366] px-5 py-4 text-left text-white">
                <p className="text-lg font-bold leading-none">N. K Goel, IRS</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/80">
                  Mentor &amp; Strategic Advisor
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#003366] uppercase tracking-wide">
              Leadership
            </h2>
            <div className="mb-8 border-l-4 border-[#003366] bg-slate-50 px-5 py-4">
              <p className="text-sm font-bold text-[#003366]">
                Pankaj Goel (Founder and Advocate)
              </p>
            </div>
            <div className="space-y-5 text-slate-700 leading-[1.75] text-base font-light">
              <p>
                Advocate Pankaj Goel, the driving force behind Goel &amp;
                Associates, is a young, passionate &amp; enthusiastic legal and
                tax professional with a rich background in Indian taxation law.
                A law graduate and esteemed member of the Uttarakhand High
                Court Bar, he brings a sharp legal acumen and deep domain
                expertise to every client interaction.
              </p>
              <p>
                With years of hands-on experience, Advocate Pankaj Goel has
                successfully represented clients before a wide range of tax
                authorities, including the Income Tax Appellate Tribunal (ITAT)
                and Commissioner of Income Tax (Appeals). His ability to blend
                legal insight with strategic tax planning has enabled countless
                clients to navigate even the most intricate financial and
                regulatory challenges with confidence.
              </p>
              <p>
                His clientele spans across corporates, MSMEs, charitable trusts,
                startups, and high-net-worth individuals--each receiving
                tailored advice and dedicated representation grounded in
                professionalism, ethics, and results.
              </p>
            </div>

            <div className="mt-10 border-l-4 border-[#003366] bg-slate-50 px-6 py-6">
              <p className="text-xs font-black tracking-[0.22em] uppercase text-slate-500 mb-4">
                Mentor &amp; Advisor
              </p>
              <p className="text-slate-700 leading-[1.75] text-base font-light">
                Shri N.K. Goel, IRS (Retd.), brings with him over 35 years of
                distinguished service in the Income Tax Department. During his
                illustrious career, he held key positions across diverse
                domains, including search &amp; seizure, investigation, audit,
                assessments, judicial matters, and departmental representative
                before the Income Tax Appellate Tribunal. His extensive
                experience and deep understanding of tax laws provide valuable
                guidance and strategic insight to the firm. In addition to his
                departmental experience, Shri Goel has also served as a visiting
                faculty for training programs conducted by the Income Tax
                Department.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
export function LawAreas() {
  const areas = [
    {
      icon: <FileText size={40} strokeWidth={1.5} />,
      title: "Direct Tax Advisory",
      desc: "Expert advice on income tax, capital gains, and wealth tax matters for individuals and businesses.",
    },
    {
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "GST Compliance",
      desc: "Comprehensive GST registration, filing, and compliance services to keep your business fully compliant.",
    },
    {
      icon: <Gavel size={40} strokeWidth={1.5} />,
      title: "Tax Litigation",
      desc: "Strong representation before tax authorities, tribunals, and courts for tax disputes and appeals.",
    },
    {
      icon: <Building2 size={40} strokeWidth={1.5} />,
      title: "Corporate Tax Planning",
      desc: "Strategic tax planning for businesses to legally minimize tax burden and maximize available benefits.",
    },
    {
      icon: <BookOpen size={40} strokeWidth={1.5} />,
      title: "Intellectual Property Rights",
      desc: "Protecting innovation through trademark search, filing, registration, and handling trademark oppositions.",
    },
    {
      icon: <Scale size={40} strokeWidth={1.5} />,
      title: "Tax Audits & Assessments",
      desc: "Professional assistance during tax audits and assessment proceedings with tax authorities.",
    },
  ];

  return (
    <section id="services" className="relative pt-16 pb-28">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d7b46a]/55 to-transparent" />
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-8 text-center">
        <h2 className="font-crimson-text text-white" style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)" }}>
          Practice Areas
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {areas.map((area, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden border border-white/12 bg-[#061423]/70 p-12 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d7b46a]/70 hover:bg-[#071a2d]/82"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/8 -mr-12 -mt-12 rounded-full group-hover:bg-[#d7b46a]/30 transition-colors duration-500" />
            <div className="text-[#d7b46a] mb-8 relative z-10 transition-colors duration-500">
              {area.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6 text-white relative z-10">
              {area.title}
            </h3>
            <p className="text-white/68 text-base leading-relaxed mb-8 relative z-10 font-light">
              {area.desc}
            </p>
            <Link
              href="/#contact"
              className="text-[#d7b46a] hover:text-white font-black flex items-center gap-2 group/link relative z-10"
            >
              <span className="text-[10px] uppercase tracking-widest">
                Learn more
              </span>
              <ChevronRight
                size={16}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  const highlights = [
    {
      value: "3+",
      title: "Years of Presence",
      desc: "Backed by years of expertise in delivering reliable legal solutions.",
    },
    {
      value: "200+",
      title: "Satisfied Clients",
      desc: "Proud to have earned the trust and confidence of our clients.",
    },
    {
      value: "10+",
      title: "Areas of Practice",
      desc: "Comprehensive legal services across diverse practice areas to meet your needs.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#061423] py-32 text-white">
      <div className="absolute inset-0">
        <img
          src="/bgcontent.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061423]/90 via-[#061423]/70 to-[#061423]/36" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061423]/84 via-transparent to-[#061423]/28" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="border border-white/12 bg-[#061423]/62 p-9 shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#d7b46a]/70 hover:bg-[#071a2d]/78"
            >
              <p className="mb-3 font-crimson-text text-5xl font-bold text-[#d7b46a]">
                {item.value}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-white/72">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  const testimonials = [
    {
      name: "Rajesh K.",
      text: "Advocate Pankaj Goel provided exceptional guidance during our corporate tax audit. His sharp understanding of tax law saved us significantly. Highly recommended.",
      role: "Business Owner, Dehradun",
    },
    {
      name: "Sunita M.",
      text: "Faced a complex ITAT matter and felt completely overwhelmed. The team at Goel & Associates handled everything with precision and achieved an excellent outcome for us.",
      role: "MSME Entrepreneur",
    },
    {
      name: "Amit S.",
      text: "A true expert in GST compliance. He was always available to answer questions and kept everything fully compliant. His strategic advice saved us a lot of time and money.",
      role: "Startup Founder",
    },
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-24">
        <span className="text-[#003366] font-black tracking-[0.3em] uppercase text-[10px] block mb-6">
          Testimonials
        </span>
        <h2 className="text-6xl font-crimson-text mb-12 text-[#003366]">
          Client Success Stories
        </h2>
        <div className="flex justify-center items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-yellow-400 font-bold text-2xl">
                *
              </div>
            ))}
          </div>
          <div className="h-8 w-px bg-slate-200 mx-2" />
          <span className="font-black uppercase text-[#003366] text-xs tracking-[0.2em] flex items-center gap-2">
            Trusted Counsel{" "}
            <span className="bg-[#003366] text-white px-2 py-0.5 rounded-sm">
              INDIA
            </span>
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-slate-50 p-12 relative rounded-sm border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
          >
            <div className="text-[#003366] mb-8 opacity-20">
              <svg
                width="45"
                height="36"
                viewBox="0 0 45 36"
                fill="currentColor"
              >
                <path d="M13.4375 0C6.01562 0 0 6.01562 0 13.4375V35.4375H18.5625V13.4375H6.875C6.875 9.8125 9.8125 6.875 13.4375 6.875V0ZM40.3125 0C32.8906 0 26.875 6.01562 26.875 13.4375V35.4375H45.4375V13.4375H33.75C33.75 9.8125 36.6875 6.875 40.3125 6.875V0Z" />
              </svg>
            </div>
            <p className="text-slate-600 italic mb-12 leading-relaxed text-lg font-light">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-5 mt-auto border-t border-slate-200 pt-8">
              <div className="w-14 h-14 rounded-full bg-[#e6eef5] overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-[#003366] font-bold text-xl">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-[#003366]">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-20">
        <div className="w-12 h-1 bg-[#003366] rounded-full" />
        <div className="w-3 h-1 bg-slate-200 rounded-full" />
        <div className="w-3 h-1 bg-slate-200 rounded-full" />
      </div>
    </section>
  );
}

function ConsultationForm() {
  return (
    <section
      id="contact"
      className="relative py-28 flex items-center overflow-hidden"
      style={{ background: "#003366" }}
    >
      {/* Full bleed background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg.png"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.9 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(7,9,15,0.72) 0%, rgba(7,9,15,0.48) 48%, rgba(7,9,15,0.28) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[#003366]/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT - heading + contact details */}
        <div className="text-white pt-4">
          <p className="text-[#003366] font-bold uppercase tracking-[0.3em] text-[10px] mb-5">
            Contact Us
          </p>
          <h2
            className="font-crimson-text text-white leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)" }}
          >
            Get In Touch
          </h2>
          <p className="text-white/45 text-base font-light leading-relaxed mb-12 max-w-sm">
            Reach out for expert tax counsel. We respond promptly and treat
            every matter with full discretion.
          </p>

          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-[#003366] flex-shrink-0 mt-0.5">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold mb-1">
                  Phone
                </p>
                <p className="text-white font-semibold text-base">
                  +91-8126234371
                </p>
                <p className="text-white/50 text-sm">+91-8279692661</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-[#003366] flex-shrink-0 mt-0.5">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold mb-1">
                  Email
                </p>
                <p className="text-white font-semibold text-base">
                  goel.taxpert@gmail.com
                </p>
                
              </div>
            </div>

            {/* Address */}
         
          </div>
        </div>

        {/* RIGHT - white form card */}
        <div className="bg-white p-10 shadow-2xl">
          <h3 className="font-crimson-text text-2xl text-[#003366] mb-1">
            Send us a Message
          </h3>
          <p className="text-slate-400 text-sm mb-7 font-light">
            Fill out the form below and we will get back to you shortly.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-6">
          <p className="text-[#003366] font-black uppercase tracking-[0.3em] text-[10px] mb-2">
            Location
          </p>
          <h2 className="font-crimson-text text-3xl text-[#003366]">
            Visit Goel &amp; Associates
          </h2>
        </div>
        <div className="h-[320px] overflow-hidden border border-slate-200 shadow-sm">
          <iframe
            title="Goel & Associates location map"
            src="https://www.google.com/maps?q=Lane%20No%201%2C%2021%2F17%2C%20Teg%20Bahadur%20Rd%2C%20Dalanwala%2C%20Dehradun%20248001&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="relative pt-12 pb-8 border-t border-slate-200 overflow-hidden"
      style={{ background: "#f8fafc" }}
    >
      {/* Full bleed background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://dtvoeevhaseb5.cloudfront.net/user-uploads/027293d5-bb19-4e7a-83a1-a15b030d4ea2.png"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.08 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Big brand name */}
        <div className="mb-8">
          <h2
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4.8vw, 4rem)",
              letterSpacing: "0",
              lineHeight: 1,
              color: "#003366",
            }}
          >
            GOEL &amp; ASSOCIATES
          </h2>
          <p className="text-slate-400 text-xs font-light mt-3 tracking-widest uppercase">
            Taxation Law Experts - Dehradun, India
          </p>
          <div className="w-16 h-[3px] bg-[#003366] mt-4" />
        </div>

        {/* 4-col grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand description */}
          <div>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Specialized legal services in taxation law, helping individuals
              and businesses navigate the complex Indian tax landscape.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-5 text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/#about" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#003366] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-5 text-slate-400">
              Services
            </h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-slate-500">
              {[
                "Direct Tax Advisory",
                "GST Compliance",
                "Tax Litigation",
                "Corporate Tax Planning",
                "IP Rights",
                "Tax Audits",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="hover:text-[#003366] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-5 text-slate-400">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-[#003366] flex-shrink-0 mt-0.5"
                />
                <span className="font-light leading-relaxed">
                  Lane No 1, 21/17, Teg Bahadur Rd,
                  <br />
                  Dalanwala, Dehradun - 248001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-[#003366] flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-semibold text-[#003366]">+91-8126234371</p>
                  <p className="font-semibold text-[#003366]">+91-8279692661</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="text-[#003366] flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs font-semibold text-[#003366]">
                    goel.taxpert@gmail.com
                  </p>
                  <p className="text-xs font-semibold text-[#003366]">
                    pankaj@goelandassociates.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            (c) 2026 Goel &amp; Associates. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#" className="hover:text-[#003366] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#003366] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#003366] transition-colors">
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
