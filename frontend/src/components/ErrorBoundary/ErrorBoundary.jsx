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

const errorMessage = this.state.error?.message || 'Unknown error';
const stackTrace = this.state.error?.stack || '';

return (
<div className="error-boundary-fallback" role="alert">
<div className="error-boundary-card">
<span className="error-boundary-icon">⚠️</span>
<h1>System Interrupted</h1>
<p>
A critical rendering failure has occurred in this section.
Operations outside this zone remain unaffected.
</p>
<p>
If the issue persists after recovery, contact your system administrator.
</p>

<details className="error-boundary-details">
<summary>Diagnostic Data</summary>
<pre>{errorMessage}{'\n'}{stackTrace}</pre>
</details>

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
