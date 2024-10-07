import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import H2 from "./H2";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SubH2 from "./SubH2";

const faqs = [
  {
    question: "Qu’est ce que la rétention séminale ?",
    answer:
      "La rétention séminale est une pratique qui consiste à éviter l'éjaculation, soit pendant les rapports sexuels, soit en s'abstenant de toute activité sexuelle qui pourrait mener à l'éjaculation. L'objectif principal est de retenir le sperme dans le corps, souvent dans le but de conserver l'énergie sexuelle et de la transformer ou la rediriger vers d'autres aspects de la vie (mentale, physique, spirituelle).",
  },
  {
    question: "Qu’est ce qu’un homme multi-orgasmique ?",
    answer:
      "En devenant multi-orgasmique, tu vas pouvoir avoir autant d'orgasmes que tu veux sans perte d'énergie entre les orgasmes. Tu vas pouvoir garder tous les bienfaits liés à la rétention séminale tout en couchant avec autant de partenaires que tu le souhaites et autant de fois que tu le désires.",
  },
  {
    question:
      "J’ai peu d’argent, est-ce que je peux quand même accèder à la formation ?",
    answer:
      "J’ai pensé à toi et j’ai mis à disposition deux méthodes pour accéder à la formation plus facilement :\n\n- Le paiement en 3 fois avec Klarna\n- L'affiliation (Tu gagnes 20% sur chaque vente que je fais grâce à toi)",
  },
];

export default function FAQ() {
  return (
    <Section>
      <SectionHeader>
        <SubH2>Foire aux questions</SubH2>
        <H2>Tu as des questions ?</H2>
      </SectionHeader>
      <dl className="mt-10 space-y-6 max-w-screen-lg w-full mx-auto divide-y divide-white/10">
        {faqs.map((faq) => (
          <Disclosure key={faq.question} as="div" className="pt-6">
            <dt>
              <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                <span className="text-base font-semibold leading-7">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <PlusSmallIcon
                    aria-hidden="true"
                    className="h-6 w-6 group-data-[open]:hidden"
                  />
                  <MinusSmallIcon
                    aria-hidden="true"
                    className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" className="mt-2 pr-12">
              <p
                className="text-base leading-7 text-gray-300"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </DisclosurePanel>
          </Disclosure>
        ))}
      </dl>
    </Section>
  );
}
