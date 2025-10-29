'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Silent catch - don't log to avoid Next.js dev overlay noise
    // In production, you can send this to an error tracking service
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Send to error tracking service here
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex items-center justify-center bg-sandstone-800 min-h-screen">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🏰</div>
            <p className="text-heritage-gold text-xl mb-2">Something went wrong</p>
            <p className="text-sandstone-400 text-sm mt-2">Please refresh the page</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 bg-heritage-gold text-heritage-brown px-6 py-2 rounded-lg hover:bg-saffron-400 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}