import {
  Award,
  Banana,
  BicepsFlexed,
  Brain,
  SmilePlus,
  Waves,
} from "lucide-react";
import { cn } from "../lib/utils";
import H2 from "./H2";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SubH2 from "./SubH2";

const clients = [
  {
    id: 1,
    icon: Brain,
    name: "Mindset : Reprogramme ton cerveau",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
    price: "500€",
    modules: [
      "Masculinité et valeurs",
      "Les piliers du développement personnel",
      "Guérir ton âme et ta sexualité",
      "Ta partenaire de vie",
      "Former une routine",
      "Comment changer RADICALEMENT TA VIE (image de soi et identité)",
      "La décision la plus importante de ta vie",
    ],
  },
  {
    id: 2,
    icon: SmilePlus,
    name: "Santé mentale : Mes 5 secrets",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
    price: "1.200€",
    modules: [
      "Tu DOIS désexualiser ton cerveau !",
      "La leçon la plus importante : la Rétention Séminale fera de toi un Homme",
      "La Présence à toi-même est CAPITALE",
      "Tutoriel : Comment Respirer",
      "Débutant : Respiration Guidée 3x30 11min",
      "Intermédiaire : Respiration Guidée 5x30 19min",
      "La Pleine Conscience : la clé pour vivre pleinement",
      "Tutoriel : Comment Méditer",
      "La Prescience : visualise ton avenir de rêve",
      "Tutoriel : Comment Visualiser",
      "Suivre sa progression : tu dois te rendre des COMPTES !",
      "Tutoriel : Comment tenir un Journal",
    ],
  },
  {
    id: 3,
    icon: BicepsFlexed,
    name: "Maitrise ton braquemart",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
    price: "3.000€",
    modules: [
      "Comprendre ce qu'est un Orgasme",
      "Masterclass Testicules : Tout savoir sur les burnes",
      "Introduction MASTERCLASS Kegels & Périnée",
      "Les kegels et le perinée en détail",
      "Programme d’entraînement Kegels",
      "La respiration pelvienne",
      "Exercice 1 : La respiration pelvienne",
      "Exercice 1 : La respiration pelvienne - Démonstration",
      "Exercice 2 : La danse des testicules",
      "Exercice 2 : La danse des testicules - Démonstration",
      "Exercice 3 : La compression scrotale",
      "Exercice 3 : La compression scrotale - Démonstration",
      "Exercice 4 : Les tractions pubo-coccygiennes",
      "Exercice 4 : Les tractions pubo-coccygiennes - Démonstration",
      "Exercice 5 : La rétention mictionnelle",
      "Exercice 5 : La rétention mictionnelle - Démonstration",
      "Exercice 6 : La posture du cavalier",
      "Exercice 6 : La posture du cavalier - Démonstration",
    ],
  },
  {
    id: 4,
    icon: Waves,
    name: "La circulation énergétique, prépare l’orgasme",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
    price: "500€",
    modules: [
      "Le courant énergétique et le système nerveux - l’aspiration à froid",
      "Réapprivoise ton corps - Guéris de tes traumas",
      "Vocalise ton plaisir - FAIS DU BRUIT !",
      "Comment gérer tes urges (pulsions, envies, etc…)",
    ],
  },
  {
    id: 5,
    icon: Award,
    name: "Deviens maître de ta prostate",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
    price: "1.400€",
    modules: [
      "Introduction : La prostate, c’est quoi ça ?",
      "Masterclass prostate : Plaisir, DHT et orgasmes !",
      "Masterclass Prostate : Plaisir, DHT et orgasmes ! - Présentation",
      "Les 7 types d’orgasme mâle",
      "Les 7 types d’orgasme mâle - présentation",
      "Comment se vider la prostate avec 5 exercices lors de la rétention ou avant une relation intime - Démonstration",
      "Quand et pourquoi se vider la prostate ?",
    ],
  },
  {
    id: 6,
    icon: Banana,
    name: "Deviens inoubliable au lit",
    imageUrl: "https://tailwindui.com/plus/img/logos/48x48/tuple.svg",
    price: "600€",
    modules: [
      "La préparation - l’excitation seul, la transmutation à chaud",
      "La communication avec sa partenaire",
      "La stimulation des zones érogènes",
      "Le ENDGAME - Faire l’amour pendant des heures sans jamais éjaculer",
      "Masterclass Bonus Cunnilingus & Clitoris : deviens un DIEU du Cunni !",
    ],
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <SectionHeader>
        <SubH2>Tout le contenu</SubH2>
        <H2>Comment ça marche ?</H2>
      </SectionHeader>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
      >
        <div className="lg:col-span-3 flex lg:flex-row flex-col gap-6 xl:gap-8">
          <div className="overflow-hidden w-full h-fit rounded-xl col-span-3 border border-zinc-700">
            <div className="flex items-center justify-center gap-x-4 border-b border-zinc-900/5 bg-zinc-800 p-6">
              <div className="text-white text-2xl sm:text-4xl text-center justify-center flex items-center gap-3 w-full font-semibold">
                <div
                  className={cn(
                    "rounded-md text-white px-4 py-2 font-semibold ring-2 ring-inset ring-primary"
                  )}
                >
                  +7.200 €
                </div>{" "}
                de formation
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full h-fit rounded-xl col-span-3 border border-zinc-700">
            <div className="flex items-center justify-center gap-x-4 border-b border-zinc-900/5 bg-zinc-800 p-6">
              <div className="text-white text-2xl sm:text-4xl text-center justify-center flex items-center gap-3 w-full font-semibold">
                <div
                  className={cn(
                    "rounded-md text-white px-4 py-2 font-semibold ring-2 ring-inset ring-primary"
                  )}
                >
                  +50 H
                </div>{" "}
                de formation
              </div>
            </div>
          </div>
        </div>
        {clients.map((client) => (
          <li
            key={client.id}
            className="overflow-hidden shrink-0 h-fit rounded-xl border border-zinc-700"
          >
            <div className="flex items-center gap-x-4 border-b border-zinc-900/5 bg-zinc-800 p-6">
              <client.icon className="size-10 text-zinc-100 p-2 flex-none rounded-lg bg-zinc-900 object-cover ring-1 ring-zinc-200/10" />
              <div className="text-base font-medium leading-6 text-zinc-50">
                {client.name}
              </div>
            </div>
            <dl className="-my-3 grow divide-y divide-zinc-700 px-6 py-4 text-sm leading-6">
              {client.modules.map((module) => (
                <div
                  key={`${client.id}-${module}-`}
                  className="flex justify-between gap-x-4 py-3"
                >
                  <dt className="text-zinc-200">{module}</dt>
                </div>
              ))}
              <div className="flex grow h-full justify-between items-end gap-x-4 py-3">
                <dt className="text-gray-500 text-lg">Prix</dt>
                <dd className="flex items-start gap-x-2">
                  <div
                    className={cn(
                      "rounded-md text-white text-xl px-3 py-1.5 font-semibold ring-1 ring-inset ring-primary"
                    )}
                  >
                    {client.price}
                  </div>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </Section>
  );
}
