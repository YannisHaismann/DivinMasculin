import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { cn } from "../lib/utils";
import H2 from "./H2";
import { HoverBorderGradient } from "./HoverBorderGradient";
import Logo from "./Logo";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SubH2 from "./SubH2";

export function PlanFeature({
  text,
  active,
  featured = false,
}: {
  text: string;
  active: boolean;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center font-medium gap-2 sm:text-lg sm:py-1.5",
        active ? (featured ? "text-white" : "text-zinc-200") : "text-muted"
      )}
    >
      {active ? (
        <CheckCircleIcon className="w-5 h-5" />
      ) : (
        <XCircleIcon className="w-5 h-5" />
      )}
      {text}
    </div>
  );
}

export default function PriceSection() {
  return (
    <Section>
      <SectionHeader>
        <SubH2>Passe à l&apos;action</SubH2>
        <H2>Rejoins-nous, camarade !</H2>
      </SectionHeader>

      <div className="relative w-full h-fit rounded-xl border border-zinc-700 max-w-lg mx-auto">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-sm w-[300px] text-center font-medium h-fit px-4 py-2 text-white rounded-lg border border-zinc-700 bg-red-800">
          Le prix va bientôt augmenter à{" "}
          <span className="font-semibold">589€.</span>
        </div>
        <div className="flex rounded-t-xl flex-col pt-12 items-center justify-center gap-x-4 border-b border-zinc-900/5 bg-zinc-800">
          <Logo />
        </div>
        <div className="grow divide-y divide-zinc-700 px-6 py-4 text-sm leading-10">
          <PlanFeature text="+50h de formation" active={true} />
          <PlanFeature text="Profite des mises à jour à venir" active={true} />
          <PlanFeature
            text="Des dizaines de PDFs et ressources"
            active={true}
          />
          <PlanFeature text="Accès à Thomas par message" active={true} />
          <PlanFeature
            text="Garantie inconditionnelle pendant 7 jours"
            active={true}
          />
        </div>
        <div className="flex justify-center flex-col items-center py-10 sm:p-10">
          <HoverBorderGradient>
            <button
              type="button"
              role="button"
              aria-label="PAYEZ 389€ MAINTENANT"
            >
              <p className="">PAYEZ 389€ MAINTENANT</p>
            </button>
          </HoverBorderGradient>
          <p className="text-zinc-500 mt-1">
            Paiement en 3x sans frais possible
          </p>
        </div>
      </div>
    </Section>
  );
}
