import { Diagnosis } from "./_components/diagnosis";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Diagnosis />
        <Footer />
      </main>
    </div>
  );
}
