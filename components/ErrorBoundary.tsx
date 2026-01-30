import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="py-12 bg-zinc-950 px-4 text-center border-y border-zinc-900">
          <div className="bg-zinc-900 border border-red-900/50 rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
            <AlertTriangle className="mx-auto text-red-600 mb-4" size={48} />
            <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Algo deu errado</h2>
            <p className="text-zinc-400 text-sm mb-6">
              Não foi possível carregar o assistente de diagnóstico neste momento.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 mx-auto transition-all hover:scale-105"
            >
              <RefreshCw size={16} />
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;