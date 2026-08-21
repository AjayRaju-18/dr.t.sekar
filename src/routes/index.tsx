import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import {
  About,
  Achievements,
  Books,
  Education,
  Experience,
  Memberships,
  Patents,
  Research,
  StatsBar,
} from "@/components/site/Sections";
import { Contact, Footer } from "@/components/site/Contact";

const title =
  "Dr. Sekar Tamilperuvalathan — Associate Professor & Head, P.G-Manufacturing Engg & Engg Design, GCT Coimbatore";
const description =
  "Portfolio of Dr. Sekar Tamilperuvalathan, Associate Professor and Head, P.G-Manufacturing Engg & Engg Design at Government College of Technology, Coimbatore — 27+ years in engineering education, research and innovation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Education />
        <Experience />
        <Research />
        <Patents />
        <Books />
        <Achievements />
        <Memberships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
