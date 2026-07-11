export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-warm-radial dark:bg-maroon-900">
      <div className="flex flex-col items-center gap-5">
        <span className="relative flex h-16 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-2xl bg-gold/40" />
          <span className="flex h-16 items-center justify-center rounded-2xl bg-maroon px-4 font-hindi text-lg font-bold text-gold-200">
            राधे
          </span>
        </span>
        <p className="font-display text-sm tracking-widest text-maroon/70 dark:text-gold-100/70">
          CRAFTING YOUR EXPERIENCE…
        </p>
      </div>
    </div>
  );
}
