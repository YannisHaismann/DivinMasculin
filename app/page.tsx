import CTASection from "./components/CTASection";
import FAQ from "./components/FAQ";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import IntroSection from "./components/IntroSection";
import PriceSection from "./components/PriceSection";
import Spotlight from "./components/Spotlight";
import TestimonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div className="flex px-2 sm:px-10 py-10 gap-32 w-screen bg-zinc-900 flex-col items-center justify-center">
      <Spotlight fill="red" />
      <Hero />
      <IntroSection />
      <FeaturesSection />
      <CTASection
        title="Réussis enfin à tenir ton NO-FAP"
        description="Tu te sens honteux de craquer à chaque fois ? Ensemble, on règle ce
            problème définitivement en moins de 90 jours."
      />
      <HowItWorks />
      <CTASection
        title="Deviens inoubliable au lit"
        description="En 90 jours, tu vas apprendre à controller TOTALEMENT ton énergie sexuelle. Met fin à tes éjaculations précoces et à ton impuissance."
      />
      <TestimonialSection />
      <PriceSection />
      <FAQ />
    </div>
  );
}
