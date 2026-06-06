import React, { Component } from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });

    console.error(
      '[TMS ErrorBoundary] Runtime failure captured\n',
      'Error:', error?.message || 'Unknown',
      '\nComponent Stack:', errorInfo?.componentStack || 'N/A',
      '\nTimestamp:', new Date().toISOString(),
      '\nURL:', window.location.href
    );

    if (typeof window !== 'undefined' && window.__ERROR_REPORTER__) {
      window.__ERROR_REPORTER__(error, errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleDismiss = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const isProduction = import.meta.env.PROD;

      return (
        <div className="error-boundary-fallback" role="alert">
          <div className="error-boundary-card">
            <span className="error-boundary-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <h1>System Interrupted</h1>
            <p>
              A critical rendering failure has occurred in this section.
              Operations outside this zone remain unaffected.
            </p>
            <p>
              If the issue persists after recovery, contact our operations team.
            </p>

            {!isProduction && (
              <details className="error-boundary-details">
                <summary>Diagnostic Data</summary>
                <pre>{this.state.error?.message || 'Unknown error'}{'\n'}{this.state.error?.stack || ''}</pre>
              </details>
            )}

            <div className="error-boundary-actions">
              <button
                className="error-boundary-btn error-boundary-btn-primary"
                onClick={this.handleReload}
                type="button"
              >
                Reload System
              </button>
              <button
                className="error-boundary-btn error-boundary-btn-secondary"
                onClick={this.handleGoHome}
                type="button"
              >
                Return to HQ
              </button>
              <button
                className="error-boundary-btn error-boundary-btn-secondary"
                onClick={this.handleDismiss}
                type="button"
              >
                Attempt Recovery
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
