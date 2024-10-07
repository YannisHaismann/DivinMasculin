import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Thomas from "./../images/thomas_goat_mode.jpg";

const benefits = [
  "Met fin à ton éjaculation précoce",
  "Tu bandes plus longtemps",
  "Tu as des orgasmes plus intenses",
  "Tu bandes dès que tu le souhaites",
  "Tu contrôle la durée d'un rapport",
  "Tu deviens inoubliable au lit",
  "Tu restes en rétention séminale",
  "Tu deviens plus confiant",
];

export default function IntroSection() {
  return (
    <div className="mx-auto relative z-20 max-w-screen-2xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
        <Image
          alt="Thomas en mode GOAT"
          src={Thomas}
          className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
        />
        <div className="w-full flex-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Être Multi-Orgasmique, c’est quoi ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            En devenant multi-orgasmique, tu vas avoir autant d&apos;orgasmes
            que tu veux sans perte d&apos;énergie entre les orgasmes. Tu vas
            garder tous les bienfaits liés à la rétention séminale tout en
            couchant autant de fois que tu le désires. Cela te semble
            surréaliste ? C’est tout à fait normal. Les chaines de télévision
            préfèrent nous recommander de regarder du porno plutôt qu’apprendre
            à connaitre notre corps.
          </p>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-7 w-5 flex-none"
                />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
