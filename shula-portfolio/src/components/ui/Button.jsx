import Link from "next/link";

const variants = {
  primary:
    "bg-navy text-white font-semibold shadow-[var(--shadow-card)] hover:bg-navy/90 hover:shadow-[var(--shadow-hover)] hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "border-2 border-navy/20 text-navy bg-white/80 backdrop-blur-sm hover:border-lilac hover:bg-lilac-soft/60",
  outline:
    "border border-navy-light/40 text-navy bg-transparent hover:border-lilac hover:bg-lilac/30",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac";

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
