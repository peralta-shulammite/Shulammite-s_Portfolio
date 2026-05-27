export default function SectionWave({ flip = false, className = "" }) {
  return (
    <div
      className={`relative w-full leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block h-[60px] w-full sm:h-[80px] lg:h-[100px]"
      >
        <path
          fill="var(--charcoal)"
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,24 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
