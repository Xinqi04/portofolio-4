import Navbar from "../components/Navbar";
import MainSection from "../components/MainSection";
import OriginsSection from "../components/OriginsSection";
import ToolsSection from "../components/ToolsSection";
import PowersSection from "../components/PowersSection";
import TimelineSection from "../components/TimelineSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        <div className="w-full px-4 flex flex-col items-center">
          <MainSection />
        </div>
        <OriginsSection />
        <ToolsSection />
        <PowersSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

