import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Stack } from "@/components/Stack";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Greeting } from "@/components/Greeting";

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6">
      <Greeting />
      <Hero />
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
