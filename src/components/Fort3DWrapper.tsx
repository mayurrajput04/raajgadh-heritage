'use client';

import { useEffect, useState } from 'react';

interface Fort3DWrapperProps {
  children: React.ReactNode;
}

export default function Fort3DWrapper({ children }: Fort3DWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-sandstone-800">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">🏰</div>
          <p className="text-heritage-gold">Loading 3D Model...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}