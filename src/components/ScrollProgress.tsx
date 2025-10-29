'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ScrollProgress() {
  const { scrollProgress } = useScrollAnimation();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-sandstone-200">
      <div
        className="h-full bg-gradient-to-r from-saffron-500 via-heritage-gold to-saffron-600 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}