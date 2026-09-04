import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import OriginsSection from "../components/OriginsSection";
import ToolsSection from "../components/ToolsSection";
import PowersSection from "../components/PowersSection";
import CertificatesSection from "../components/CertificatesSection";
import TimelineSection from "../components/TimelineSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <Reveal className="w-full px-4 flex flex-col items-center" delay={80}>
          <MainSection />
        </Reveal>
        <Reveal className="w-full"><OriginsSection /></Reveal>
        <Reveal className="w-full" delay={40}><ToolsSection /></Reveal>
        <Reveal className="w-full"><PowersSection /></Reveal>
        <Reveal className="w-full"><CertificatesSection /></Reveal>
        <Reveal className="w-full"><TimelineSection /></Reveal>
        <Reveal className="w-full"><ContactSection /></Reveal>
      </main>
      <Reveal className="w-full"><Footer /></Reveal>
    </div>
  );
}
