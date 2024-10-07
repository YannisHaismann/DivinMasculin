"use client";

import { ArrowDown } from "lucide-react";
import ReduceTestimonial from "./AvisSection";
import CTA from "./CTA";
import Logo from "./Logo";
import WistiaVideo from "./WistiaVideo";

export default function Hero() {
  return (
    <div className="w-full min-h-screen">
      <div className="relative isolate z-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto text-center">
              <Logo />
              <p className="text-base sm:text-lg mt-10 font-medium mb-4 text-gray-300">
                Tu es un homme entre 16 et 38 ans ?
              </p>
              <h1 className="text-balance max-w-5xl mx-auto text-3xl sm:text-5xl sm:leading-[4rem] font-bold font-poppins text-gray-50">
                Maitrise la Rétention Séminale et deviens Multi-Orgasmique en 90
                jours (garanti)
              </h1>
              <p className="mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-8 text-gray-400">
                Rentre dans le TOP 99.99% des hommes et obtiens tout ce que tu
                souhaites dans la vie (femmes, succès, richesse, santé) en
                maitrisant ton énergie sexuelle.
              </p>
              <CTA />
              <ReduceTestimonial />
            </div>
            <div className="flex w-full h-full flex-col items-center justify-center sm:mt-24 mt-16">
              <div className="text-gray-400 text-base sm:text-xl font-medium font-lexend uppercase flex items-center gap-2">
                <ArrowDown />
                <span>TOUTES LES INFOS DANS UNE VIDÉO</span>
                <ArrowDown />
              </div>
              <div className="mt-6 sm:mt-10 flow-root w-full h-full">
                <div className="-m-2 rounded-xl bg-zinc-100/5 p-2 ring-1 ring-inset ring-zinc-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <WistiaVideo />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff6f6f] to-[#ff2f2f] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
