import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { HowIWork } from "@/components/HowIWork";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6">
      <Hero />
      <SelectedWork />
      <HowIWork />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
