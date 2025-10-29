'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackIcon?: string;
  fallbackText?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
  fallbackIcon = '🏰',
  fallbackText,
}: ImageWithFallbackProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className={`flex items-center justify-center bg-sandstone-800 ${className}`}>
        <div className="text-center p-8">
          <div className="text-6xl mb-2">{fallbackIcon}</div>
          {fallbackText && (
            <p className="text-sandstone-400 text-sm">{fallbackText}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setImgError(true)}
    />
  );
}