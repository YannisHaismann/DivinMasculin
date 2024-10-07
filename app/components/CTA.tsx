import { HoverBorderGradient } from "./HoverBorderGradient";

export default function CTA() {
  return (
    <div className="flex justify-center flex-col items-center py-10 sm:p-10">
      <HoverBorderGradient>
        <button type="button" role="button" aria-label="REJOINDRE LA FORMATION">
          <p>REJOINDRE LA FORMATION</p>
        </button>
      </HoverBorderGradient>
      <p className="text-zinc-500 mt-1">Paiement en 3x sans frais possible</p>
    </div>
  );
}
