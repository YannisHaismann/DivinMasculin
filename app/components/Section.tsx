export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full relative z-20 justify-center max-w-screen-2xl flex flex-col gap-20 sm:px-6 lg:px-8 pt-10 sm:pt-20">
      {children}
    </div>
  );
}
