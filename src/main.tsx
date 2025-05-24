import { createRoot } from 'react-dom/client'
import './index.scss'
import './i18n';
import ErrorBoundary from './app/components/ErrorBoundary/index.tsx';
import Router from './Router';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>,
)
