import { ErrorBoundary } from '@/components';
import { MainLayout } from '@/layouts';
import { Home } from '@/pages';

export default function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Home />
      </MainLayout>
    </ErrorBoundary>
  );
}
