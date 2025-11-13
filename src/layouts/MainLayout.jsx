import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import FloatingContactButton from '../components/FloatingContactButton';
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="bg-gray-100">
        <Navbar />
      </div>

      <div className="flex-grow">
        <Outlet />
      </div>
      <FloatingContactButton />{/* Floating Contact Button */}
      <Footer />
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#ffffff',
            color: '#0f172a',
            border: '1px solid rgba(148, 163, 184, 0.35)',
            borderRadius: '12px',
            padding: '14px 18px',
            boxShadow: '0 12px 34px rgba(15, 23, 42, 0.12)',
            fontSize: '0.95rem',
            fontWeight: 500,
          },
          success: {
            iconTheme: {
              primary: '#0c4a6e',
              secondary: '#f0f9ff',
            },
          },
          error: {
            iconTheme: {
              primary: '#dc2626',
              secondary: '#fee2e2',
            },
          },
        }}
      />
    </div>
  );
};

export default MainLayout;

