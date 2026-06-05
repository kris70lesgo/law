import { Footer, Header, LawAreas } from "../page";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#061423] text-white">
      <Header />
      <main className="relative overflow-hidden bg-[#061423] pt-24">
        <img
          src="/SERVICEBG.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-top opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061423]/78 via-[#061423]/66 to-[#061423]/88" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061423]/72 via-transparent to-[#061423]/44" />
        <div className="relative z-10">
          <LawAreas />
        </div>
      </main>
      <Footer />
    </div>
  );
}
