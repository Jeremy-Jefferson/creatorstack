import { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Button from './Button';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-full bg-[#EF4444]/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle size={32} className="text-[#EF4444]" />
            </div>
            <h1 className="text-2xl font-bold text-[#F5F7FB] mb-2">
              Something went wrong
            </h1>
            <p className="text-[#7C859A] mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            {this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-[#7C859A] cursor-pointer hover:text-[#A8B0C2]">
                  Error details
                </summary>
                <pre className="mt-2 p-3 bg-[#111218] border border-white/[0.08] rounded-lg text-xs text-[#EF4444] overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <div className="flex gap-3 justify-center">
              <Button onClick={this.handleReset} variant="secondary">
                <RefreshCw size={16} />
                Try Again
              </Button>
              <Button onClick={() => window.location.reload()}>
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
