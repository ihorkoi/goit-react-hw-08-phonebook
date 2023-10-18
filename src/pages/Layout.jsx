import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavSection } from '../components/NavSection/NavSection.jsx';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <NavSection />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
