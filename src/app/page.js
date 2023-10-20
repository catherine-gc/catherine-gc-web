import Image from 'next/image';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection';
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import PerformancesSection from './components/PerformancesSection';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen flex-col bg-pink-100">
      <Navbar />
      <div className="mt-20 mx-auto px-12 py-4">
        <Hero />
        <PerformancesSection/>
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      
    </main>
  );
}
