import CTA from "./CTA";
import Logo from "./Logo";

export default function CTASection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-800/80 mt-20 w-screen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Logo />
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-200">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
}
