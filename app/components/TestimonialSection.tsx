import { StarIcon } from "lucide-react";
import Image from "next/image";
import H2 from "./H2";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SubH2 from "./SubH2";

export default function TestimonialSection() {
  return (
    <Section>
      <SectionHeader>
        <SubH2>Témoignages</SubH2>
        <H2>Les avis les plus sincères du game</H2>
      </SectionHeader>
      <div className="w-full">
        <div className="overflow-hidden max-w-screen-lg mx-auto w-full flex flex-col rounded-xl border border-zinc-700">
          <div className="w-full relative">
            <script
              src="https://fast.wistia.com/embed/medias/m18dq28euq.jsonp"
              async
            ></script>
            <script
              src="https://fast.wistia.com/assets/external/E-v1.js"
              async
            ></script>
            <div
              className="wistia_embed aspect-video wistia_async_m18dq28euq seo=true videoFoam=false"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="wistia_swatch aspect-video"
                style={{
                  height: "100%",
                  left: "0",
                  opacity: "0",
                  overflow: "hidden",
                  position: "absolute",
                  top: "0",
                  transition: "opacity 200ms",
                  width: "100%",
                }}
              >
                <Image
                  width={1080}
                  height={1920}
                  src="https://fast.wistia.com/embed/medias/m18dq28euq/swatch"
                  style={{
                    filter: "blur(5px)",
                    height: "100%",
                    width: "100%",
                  }}
                  alt="wistia video thumbnail"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full h-fit rounded-b-xl col-span-3">
            <div className="flex items-center justify-center flex-col gap-4 bg-zinc-800 p-6">
              <p className="text-zinc-500 italic">
                « Thomas derrière il a fait de vraies recherches et surtout il a
                expérimenté ces choses avant de nous les expliquer de nous les
                montrer et j&apos;aurais aimé ajouter que aussi après un mois
                aujourd&apos;hui où j&apos;applique les choses et je pratique je
                me rends compte que oui cette formation elle va servir à être un
                homme multi orgasmique mais elle sert aussi à être un homme tout
                court. »
              </p>
              <hr className="w-full border-zinc-700" />
              <div className="text-white text-base sm:text-xl text-center justify-between flex items-center gap-2 w-full font-semibold">
                <p className="text-start">Martin Miller (le vétéran)</p>
                <div className="flex flex-col mt-1 items-start gap-1">
                  <div className="flex justify-center sm:justify-start w-full gap-0.5 mb-1.5">
                    <StarIcon className="size-5 fill-red-500 stroke-red-500" />
                    <StarIcon className="size-5 fill-red-500 stroke-red-500" />
                    <StarIcon className="size-5 fill-red-500 stroke-red-500" />
                    <StarIcon className="size-5 fill-red-500 stroke-red-500" />
                    <StarIcon className="size-5 fill-red-500 stroke-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
