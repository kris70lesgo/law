import React from "react";
import LoadingScreen from "./components/LoadingScreen";
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
    <div className="min-h-screen bg-white font-inter text-[#1E293B]">
      <LoadingScreen />
      <Header />
      <Hero />
      <About />
      <LawAreas />
      <WhyChoose />
      <SuccessStories />
      <ConsultationForm />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
      style={{
        background: "rgba(10, 15, 30, 0.45)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "0 4px 32px 0 rgba(0,0,30,0.25)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Nav only — top bar removed */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="leading-tight">
              <p className="font-bold text-lg tracking-tight uppercase text-white">
                Goel &amp;
              </p>
              <p className="font-bold text-lg tracking-tight uppercase -mt-1 text-white">
                Associates
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
            <a href="#home" className="text-blue-400 transition-colors">
              Home
            </a>
            <a
              href="#services"
              className="text-white/80 hover:text-blue-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
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
      className="relative overflow-hidden"
      style={{ background: "#07090f", minHeight: "100vh" }}
    >
      {/* Blue radial glow on right side */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 75% 60%, rgba(37,99,235,0.22) 0%, transparent 65%)",
        }}
      />

      {/* Thin blue accent line on far left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 10%, #3b82f6 50%, transparent 90%)",
        }}
      />

      {/* Main grid: text left, portrait right */}
      <div
        className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "100vh" }}
      >
        {/* LEFT — text content */}
        <div className="flex flex-col justify-center pt-40 pb-20 relative z-20">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
            Taxation Law • Dehradun, India
          </span>
          <h1
            className="font-crimson-text text-white leading-[1.06] mb-8"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.2rem)" }}
          >
            Navigate India&apos;s
            <br />
            Complex Tax
            <br />
            <span className="text-blue-400">Landscape</span>
          </h1>
          <p className="text-white/45 text-base mb-10 tracking-wide font-light max-w-sm leading-relaxed">
            Specialized legal counsel in taxation law, helping individuals and
            businesses optimize tax strategies while ensuring full compliance
            with Indian taxation laws.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="self-start bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] transition-all shadow-xl shadow-blue-900/30">
              Schedule Consultation <ChevronRight size={16} />
            </button>
            <button className="self-start border border-white/20 hover:border-blue-400 text-white/70 hover:text-blue-400 px-8 py-4 flex items-center gap-3 font-bold uppercase tracking-widest text-[11px] transition-all">
              Learn About Services
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap gap-10 border-t border-white/10 pt-10">
            <div>
              <span className="text-4xl font-bold text-white block mb-1">
                3+
              </span>
              <span className="text-[9px] text-blue-500 font-bold uppercase tracking-[0.22em]">
                Years Experience
              </span>
            </div>
            <div>
              <span className="text-4xl font-bold text-white block mb-1">
                100+
              </span>
              <span className="text-[9px] text-blue-500 font-bold uppercase tracking-[0.22em]">
                Cases Handled
              </span>
            </div>
            <div>
              <span className="text-4xl font-bold text-white block mb-1">
                ITAT
              </span>
              <span className="text-[9px] text-blue-500 font-bold uppercase tracking-[0.22em]">
                Tribunal Representation
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — lawyer portrait */}
        <div
          className="hidden md:flex items-end justify-center relative"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "320px",
              height: "180px",
              background:
                "radial-gradient(ellipse, rgba(59,130,246,0.30) 0%, transparent 70%)",
              filter: "blur(32px)",
            }}
          />
          <img
            src="https://raw.createusercontent.com/c7a90346-5a88-46b8-947c-9dc46e8bd833/"
            alt="Advocate Pankaj Goel"
            style={{
              position: "relative",
              zIndex: 10,
              width: "100%",
              height: "95vh",
              objectFit: "contain",
              objectPosition: "bottom center",
              mixBlendMode: "screen",
              maskImage:
                "linear-gradient(to top, transparent 0%, black 8%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, black 8%, black 90%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0" />
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div className="relative group">
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-blue-600" />
          <div className="bg-slate-200 aspect-[3/4] overflow-hidden shadow-2xl relative">
            <img
              src="https://www.goelandassociates.com/lovable-uploads/f1379bca-1c7a-4771-a731-fedbeef55821.png"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              alt="Advocate Pankaj Goel"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-blue-600" />

          {/* Credential badge */}
          <div className="absolute -bottom-4 left-8 bg-[#0F172A] text-white px-6 py-4 shadow-xl z-20">
            <p className="text-[9px] uppercase tracking-[0.25em] text-blue-400 font-bold mb-1">
              Education
            </p>
            <p className="text-sm font-bold">B.Com, LLB, AIBE</p>
            <p className="text-[9px] text-white/50 mt-1">
              DAV (PG) College, Dehradun
            </p>
          </div>
        </div>

        <div className="pl-10">
          <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs block mb-6">
            About the Advocate
          </span>
          <h2 className="text-6xl font-crimson-text mb-10 text-[#0F172A]">
            Advocate Pankaj Goel
          </h2>
          <div className="space-y-6 text-slate-600 leading-[1.8] text-base font-light">
            <p>
              Advocate Pankaj Goel, the driving force behind{" "}
              <span className="font-bold text-[#0F172A]">
                Goel &amp; Associates
              </span>
              , is a young, passionate &amp; enthusiastic legal and tax
              professional with a rich background in Indian taxation law. A law
              graduate and esteemed member of the{" "}
              <span className="font-bold text-[#0F172A]">
                Uttarakhand High Court Bar
              </span>
              , he brings a sharp legal acumen and deep domain expertise to
              every client interaction.
            </p>
            <p>
              With years of hands-on experience, he has successfully represented
              clients before a wide range of tax authorities, including the{" "}
              <span className="font-bold text-[#0F172A]">
                Income Tax Appellate Tribunal (ITAT)
              </span>{" "}
              and Commissioner of Income Tax (Appeals).
            </p>
            <p>
              His clientele spans across corporates, MSMEs, charitable trusts,
              startups, and high-net-worth individuals — each receiving tailored
              advice grounded in professionalism, ethics, and results.
            </p>
          </div>

          {/* Key credentials */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { label: "Bar Council", value: "Uttarakhand" },
              { label: "Languages", value: "English, Hindi" },
              { label: "Specialisation", value: "Taxation Law" },
              { label: "Court", value: "ITAT & HC Appeals" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 px-4 py-3 border-l-2 border-blue-600"
              >
                <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-bold text-[#0F172A]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="font-crimson-text text-5xl text-[#0F172A] italic">
              Pankaj Goel
            </p>
            <div className="w-24 h-[2px] bg-blue-600 mt-4" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold mt-2">
              Taxation Law Expert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LawAreas() {
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
    <section id="services" className="py-32 bg-slate-50 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 text-center mb-24">
        <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] block mb-6">
          Our Practice Areas
        </span>
        <h2 className="text-6xl font-crimson-text mb-8 text-[#0F172A]">
          Comprehensive Tax Solutions
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
          Comprehensive legal solutions for all your taxation needs, delivered
          with expertise and attention to detail.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {areas.map((area, idx) => (
          <div
            key={idx}
            className="bg-white p-12 border border-slate-100 hover:border-blue-600 transition-all group relative overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 duration-500"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 -mr-12 -mt-12 rounded-full group-hover:bg-blue-600 transition-colors duration-500" />
            <div className="text-blue-600 mb-8 relative z-10 group-hover:text-white transition-colors duration-500">
              {area.icon}
            </div>
            <h3 className="text-2xl font-bold mb-6 text-[#0F172A] relative z-10">
              {area.title}
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8 relative z-10 font-light">
              {area.desc}
            </p>
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 font-black flex items-center gap-2 group/link relative z-10"
            >
              <span className="text-[10px] uppercase tracking-widest">
                Learn more
              </span>
              <ChevronRight
                size={16}
                className="group-hover/link:translate-x-1 transition-transform"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-32 bg-[#0F172A] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0F172A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <h2 className="text-6xl font-crimson-text mb-14 leading-tight">
            Trusted Tax Expertise. <br />
            <span className="text-blue-500 italic">Unwavering Commitment.</span>
          </h2>
          <ul className="space-y-8 mb-16">
            {[
              "Proven Track Record at ITAT & High Court",
              "Personalised Tax Strategy for Every Client",
              "Confidential & Discreet Legal Counsel",
              "Serving Corporates, MSMEs, Trusts & HNIs",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-6 text-xl font-light"
              >
                <div className="w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                </div>
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 flex items-center gap-3 font-bold uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-600/20">
              SCHEDULE CONSULTATION <ChevronRight size={18} />
            </button>
          </a>
        </div>

        {/* Right side stats panel */}
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              value: "3+",
              label: "Years of Experience",
              sub: "In Indian Taxation Law",
            },
            {
              value: "100+",
              label: "Cases Handled",
              sub: "Successfully Resolved",
            },
            {
              value: "ITAT",
              label: "Tribunal Appearances",
              sub: "Income Tax Appellate",
            },
            { value: "HC", label: "High Court", sub: "Uttarakhand Bar Member" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-white/10 p-8 hover:border-blue-600 transition-colors"
            >
              <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest">
                {stat.sub}
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
        <span className="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] block mb-6">
          Testimonials
        </span>
        <h2 className="text-6xl font-crimson-text mb-12 text-[#0F172A]">
          Client Success Stories
        </h2>
        <div className="flex justify-center items-center gap-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-yellow-400 font-bold text-2xl">
                ★
              </div>
            ))}
          </div>
          <div className="h-8 w-px bg-slate-200 mx-2" />
          <span className="font-black uppercase text-[#0F172A] text-xs tracking-[0.2em] flex items-center gap-2">
            Trusted Counsel{" "}
            <span className="bg-[#0F172A] text-white px-2 py-0.5 rounded-sm">
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
            <div className="text-blue-600 mb-8 opacity-20">
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
              <div className="w-14 h-14 rounded-full bg-blue-100 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center text-blue-600 font-bold text-xl">
                {t.name[0]}
              </div>
              <div>
                <p className="font-bold text-[#0F172A]">{t.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-20">
        <div className="w-12 h-1 bg-blue-600 rounded-full" />
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
      style={{ background: "#07090f" }}
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
        <div className="absolute inset-0 bg-blue-950/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT — heading + contact details */}
        <div className="text-white pt-4">
          <p className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-5">
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
              <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
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
              <div className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
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

        {/* RIGHT — white form card */}
        <div className="bg-white p-10 shadow-2xl">
          <h3 className="font-crimson-text text-2xl text-[#0F172A] mb-1">
            Send us a Message
          </h3>
          <p className="text-slate-400 text-sm mb-7 font-light">
            Fill out the form below and we will get back to you shortly.
          </p>
          <form className="space-y-5">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400">
                Full Name *
              </label>
              <input
                type="text"
                className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-blue-600 transition-colors text-slate-900 text-sm"
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-blue-600 transition-colors text-slate-900 text-sm"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-blue-600 transition-colors text-slate-900 text-sm"
                  placeholder="+91 ..."
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400">
                Subject *
              </label>
              <input
                type="text"
                className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-blue-600 transition-colors text-slate-900 text-sm"
                placeholder="e.g. GST Compliance, Tax Audit..."
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-black mb-2 text-slate-400">
                Message *
              </label>
              <textarea
                rows={4}
                className="w-full bg-slate-50 border-b-2 border-slate-200 px-3 py-3 focus:outline-none focus:border-blue-600 transition-colors resize-none text-slate-900 text-sm"
                placeholder="Briefly describe your tax matter..."
              />
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/20">
              Send Message <ChevronRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="relative pt-24 pb-12 border-t border-slate-200 overflow-hidden"
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Big brand name */}
        <div className="mb-14">
          <h2
            style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#0F172A",
            }}
          >
            GOEL &amp;
            <br />
            ASSOCIATES
          </h2>
          <p className="text-slate-400 text-sm font-light mt-4 tracking-widest uppercase">
            Taxation Law Experts · Dehradun, India
          </p>
          <div className="w-16 h-[3px] bg-blue-600 mt-5" />
        </div>

        {/* 4-col grid */}
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand description */}
          <div>
            <p className="text-sm text-slate-500 font-light leading-relaxed">
              Specialized legal services in taxation law, helping individuals
              and businesses navigate the complex Indian tax landscape.
            </p>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-slate-400">
              Services
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
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
                    href="#services"
                    className="hover:text-blue-600 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-slate-400">
              Contact Info
            </h4>
            <ul className="space-y-5 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-blue-600 flex-shrink-0 mt-0.5"
                />
                <span className="font-light leading-relaxed">
                  No.1, 21/17, Teg Bahadur Rd,
                  <br />
                  Dalanwala, Dehradun — 248001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-blue-600 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="font-semibold text-[#0F172A]">+91-8126234371</p>
                  <p className="font-semibold text-[#0F172A]">+91-8279692661</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="text-blue-600 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-xs font-semibold text-[#0F172A]">
                    goel.taxpert@gmail.com
                  </p>
                  <p className="text-xs font-semibold text-[#0F172A]">
                    pankaj@goelandassociates.com
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
            © 2026 Goel &amp; Associates. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
