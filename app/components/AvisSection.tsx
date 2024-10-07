import { StarIcon } from "@heroicons/react/16/solid";
import Pic1 from "./../images/pic1.webp";
import Pic2 from "./../images/pic2.jpg";
import Pic3 from "./../images/pic3.jpg";
import Pic4 from "./../images/pic4.jpg";
import Pic5 from "./../images/pic5.webp";
import { Avis } from "./Avis";

export default function ReduceTestimonial() {
  return (
    <div className="flex mx-auto flex-col sm:flex-row my-6 w-fit gap-x-8 gap-y-4 items-center">
      <div className="flex w-full sm:-mr-0 mr-5 flex-row items-center justify-center">
        <Avis
          items={[
            {
              id: 1,
              name: "Coco (le goat)",
              image: Pic1,
            },
            {
              id: 2,
              name: "Franck (le spartiate)",
              image: Pic5,
            },
            {
              id: 3,
              name: "Pierick (musclor)",
              image: Pic2,
            },
            {
              id: 4,
              name: "Saez (le vétéran)",
              image: Pic3,
            },
            {
              id: 5,
              name: "Asha (le guerrier)",
              image: Pic4,
            },
          ]}
        />
      </div>
      <div className="flex shrink-0 flex-col items-center gap-1">
        <div className="flex flex-col mt-1 items-start gap-1">
          <div className="flex justify-center sm:justify-start w-full gap-0.5">
            <StarIcon className="size-5 fill-red-500 stroke-red-500" />
            <StarIcon className="size-5 fill-red-500 stroke-red-500" />
            <StarIcon className="size-5 fill-red-500 stroke-red-500" />
            <StarIcon className="size-5 fill-red-500 stroke-red-500" />
            <StarIcon className="size-5 fill-red-500 stroke-red-500" />
          </div>
          <span className="text-[15px] dark:text-stone-100 text-zinc-400">
            Rejoins +200 camarades
          </span>
        </div>
      </div>
    </div>
  );
}
