import React from 'react';
import showAlertDialog from '../../../utils/showAlertDialog';

class ErrorBoundary extends React.Component<any, {
  hasError: boolean
}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Global Error Boundary: ', error, errorInfo);

    showAlertDialog({
      content: error.message,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
    }

    return this.props.children;
  }
}

export default ErrorBoundary;