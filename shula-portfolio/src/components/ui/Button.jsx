"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";

const MotionLink = motion.create(Link);

const variants = {
  primary:
    "bg-navy text-white font-semibold shadow-[var(--shadow-card)] hover:bg-navy/90 hover:shadow-[var(--shadow-hover)] hover:shadow-lilac/20",
  secondary:
    "border-2 border-navy/20 text-navy bg-white/80 backdrop-blur-sm hover:border-lilac hover:bg-lilac-soft/60 hover:shadow-[var(--shadow-card)]",
  outline:
    "border border-navy-light/40 text-navy bg-transparent hover:border-lilac hover:bg-lilac/30",
};

const motionProps = {
  whileHover: { scale: 1.03, y: -1 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 380, damping: 22 },
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  magnetic = true,
  ...props
}) {
  const base =
    "relative inline-flex min-h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac sm:w-auto sm:min-h-0 sm:px-7 sm:py-3.5";

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const ripple = (
    <span
      className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-lilac/0 via-lilac/20 to-lilac/0" />
    </span>
  );

  const wrap = (node) =>
    magnetic ? (
      <Magnetic strength={variant === "primary" ? 0.22 : 0.16}>{node}</Magnetic>
    ) : (
      node
    );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return wrap(
        <motion.a
          href={href}
          className={`group ${classes}`}
          {...motionProps}
          {...props}
        >
          {ripple}
          <span className="relative z-[1]">{children}</span>
        </motion.a>
      );
    }
    return wrap(
      <MotionLink href={href} className={`group ${classes}`} {...motionProps} {...props}>
        {ripple}
        <span className="relative z-[1]">{children}</span>
      </MotionLink>
    );
  }

  return wrap(
    <motion.button
      type={type}
      className={`group ${classes}`}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {ripple}
      <span className="relative z-[1]">{children}</span>
    </motion.button>
  );
}
