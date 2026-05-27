export default function BackgroundShapes({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="bg-hex absolute inset-0 opacity-60" />
      <div
        className="animate-float-slow absolute top-[15%] right-[10%] h-16 w-16 rounded-full border border-orchid/20 bg-orchid/5"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="animate-float absolute top-[40%] left-[5%] h-12 w-12 rotate-45 border border-lavender/15"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="animate-float-slow absolute bottom-[25%] right-[20%] h-20 w-20 rounded-lg border border-orchid-bright/10 bg-gradient-to-br from-orchid/10 to-transparent"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />
      <div className="animate-pulse-glow absolute top-[60%] left-[15%] h-8 w-8 rounded-full bg-lavender/20 blur-sm" />
    </div>
  );
}
