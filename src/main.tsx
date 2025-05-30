import { createRoot } from 'react-dom/client'
import './index.scss'
import './i18n';
import ErrorBoundary from './app/components/ErrorBoundary/index.tsx';
import Router from './Router';
import { ConfigProvider } from 'antd';

import { theme } from './theme';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <ConfigProvider theme={theme}>
      <Router />
    </ConfigProvider>
  </ErrorBoundary>,
)
