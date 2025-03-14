import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy text-white font-mono p-8">
          <h1 className="text-2xl mb-4">Something went wrong</h1>
          <pre className="text-[#8888ff]">{this.state.error?.message}</pre>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 text-white hover:text-[#8888ff]"
          >
            [Reload page]
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;