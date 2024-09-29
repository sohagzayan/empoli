'use client';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

const ShinyButton = () => {
  return (
    <motion.button
      initial={{ scale: 1 }} // Remove custom CSS variable here
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="relative rounded-md px-6 py-2"
      style={
        {
          '--x': '100%', // Custom CSS variable can be passed here
          background: `radial-gradient(circle at 50% 0%, 0.05) 0%, transparent 60%), rgba(var(--solid-color-background), 1)`,
        } as CSSProperties // Cast `style` to CSSProperties
      }
    >
      <span
        className="relative block h-full w-full font-light tracking-wide text-neutral-100"
        style={{
          maskImage: `linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))`,
          WebkitMaskImage: `linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))`,
        }}
      >
        Start now
      </span>
      <span
        className="absolute inset-0 block rounded-md p-px"
        style={{
          backgroundImage: `linear-gradient(-75deg, rgba(var(--overlay-color), 0.1) calc(var(--x) + 20%), rgba(var(--overlay-color), 0.5) calc(var(--x) + 25%), rgba(var(--x), 0.1) calc(var(--x) + 100%))`,
          mask: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
          WebkitMask: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
          maskComposite: `exclude`,
          WebkitMaskComposite: `xor`,
        }}
      />
    </motion.button>
  );
};

export default ShinyButton;
