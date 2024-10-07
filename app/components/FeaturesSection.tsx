"use client";

import { BanknotesIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Medal, Speech } from "lucide-react";
import H2 from "./H2";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SubH2 from "./SubH2";

const features = [
  {
    name: "Tu deviens irrésistible aux yeux des femmes",
    description:
      "Ta voix, ton regard, ta manière de parler, tout cela devient plus attirant pour les femmes.",
    icon: HeartIcon,
  },
  {
    name: "Ton succès devient inévitable",
    description:
      "Tu transmutes ton énergie sexuelle dans ton travail et tu éteint tous les concurents.",
    icon: BanknotesIcon,
  },
  {
    name: "Tu réduis ton anxiété sociale",
    description:
      "Grâce à ta testostérone, tu te sens plus à l'aise et tu t'exprime avec confiance.",
    icon: Speech,
  },
  {
    name: "Tes performances sportives explosent",
    description:
      "Boosté par ta testostérone, tu deviens une véritable machine de guerre.",
    icon: Medal,
  },
];

export default function FeaturesSection() {
  return (
    <Section>
      <SectionHeader>
        <SubH2>Rétention séminale</SubH2>
        <H2>Quels sont les avantages ?</H2>
      </SectionHeader>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative border rounded-xl p-6 bg-zinc-900 border-zinc-700"
            >
              <dt className="text-base flex flex-col gap-4 relative font-semibold leading-7 text-zinc-50">
                <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <feature.icon
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  />
                </div>
                <p>{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base leading-7 text-zinc-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
