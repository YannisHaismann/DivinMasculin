import { CreditCard } from "lucide-react";

export default async function Banner() {
  return (
    <div className="relative z-20 inset-0 flex h-[2.2rem] w-full overflow-hidden border-b border-zinc-600 bg-zinc-700">
      <div className="w-[50px] xl:w-[80px] absolute left-0 h-full bg-gradient-to-r from-zinc-700 to-transparent z-10"></div>
      <div className="w-[50px] xl:w-[80px] absolute right-0 h-full bg-gradient-to-r to-zinc-700 from-transparent z-10"></div>
      <div className="animate-marquee absolute top-0 mt-1.5 flex justify-around whitespace-nowrap xl:w-full">
        <PaiementInThreeTimes />
        <PaiementInThreeTimes />
        <PaiementInThreeTimes />
      </div>
      <div className="animate-marquee2 absolute top-0 mt-1.5 flex justify-around whitespace-nowrap xl:w-full">
        <PaiementInThreeTimes />
        <PaiementInThreeTimes />
        <PaiementInThreeTimes />
      </div>
    </div>
  );
}

async function PaiementInThreeTimes() {
  return (
    <div className="font-poppins text-white mx-10 flex items-center gap-2">
      <CreditCard className="size-5" />
      <span className="">Paiement en 3 fois sans frais avec Klarna</span>
    </div>
  );
}
